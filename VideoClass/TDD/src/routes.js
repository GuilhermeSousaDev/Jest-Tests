const User = require('./users/implementations');

const routes = require('express').Router();

const user = new User();

const newUser = user.create({ 
    name: 'Thiago',
    email: 'Thiago@gmail.com',
    password: '12345',
});

console.log(newUser);

module.exports = routes;