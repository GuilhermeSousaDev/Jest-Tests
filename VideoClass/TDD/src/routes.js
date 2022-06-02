const route = require('express').Router();
const User = require('./users/implementations/index');

route.post('/sessions', (req, res) => {
    const { email, password } = req.body;

    const user = new User().findByEmail(email);

    if (!user) {
        return res.status(401).json({ message: 'User not Found' });
    }

    if (!new User().checkPassword(password, user.password)) {
        return res.status(401).json({ message: 'Incorrect Password' })
    }   

    res.status(200).send({});
});

module.exports = route;