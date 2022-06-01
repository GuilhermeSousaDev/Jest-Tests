const route = require('express').Router();

route.post('/sessions', (req, res) => {
    const { email, password } = req.body;

    res.status(200).send({});
});

module.exports = route;