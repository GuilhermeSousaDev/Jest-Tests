const { compare } = require('bcryptjs');
const jwt = require('jsonwebtoken');
const isAuthenticated = require('./middleware/isAuthenticated');

const route = require('express').Router();
const User = require('./users/implementations/index');

route.post('/sessions', async (req, res) => {
    const { email, password } = req.body;

    const user = new User().findByEmail(email);

    if (!user) {
        return res.status(401).json({ message: 'User not Found' });
    }

    if (!new User().checkPassword(password, user.password)) {
        return res.status(401).json({ message: 'Incorrect Password' })
    }   

    const token = new User().generateToken({ id: user.id });

    res.status(200).json({
        user,
        token,
    });
});

route.use(isAuthenticated);

route.get('/dashboard', (req, res) => {
    return res.status(200).send({});
});

module.exports = route;