const express = require('express');
const router = require('./routes');

class App {
    constructor () {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares () {
        this.app.use(express.json());
    }

    routes () {
        this.app.use(router);
    }
}

module.exports = new App().app;