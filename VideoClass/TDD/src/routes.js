const { compare } = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

    const token = jwt.sign(
        { id: user.id }, 'djskjdiojijdjao'
    );

    res.status(200).json({
        user,
        token,
    });
});

module.exports = route;