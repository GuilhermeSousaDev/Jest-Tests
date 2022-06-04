const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { users } = require("../models/users");

class User {
    #users = users;

    find () {
        return this.#users;
    }

    findById(id) {
        const user = this.#users.filter(user => user.id === id);

        return user.join('');
    }

    findByEmail(email) {
        const user = this.#users.filter(user => user.email === email);

        return user.join('');
    }

    async create ({ name, email, password }) {
        this.#users.push({
            id: this.#users[this.#users.length - 1].id + 1,
            name,
            email,
            password: await hash(password, 8),
        });

        return this.#users[this.#users.length - 1];
    }

    delete (id) {
        this.#users = this.#users.filter(user => {
            user.id !== id;
        });
    }

    async checkPassword (password, id) {
        const user = this.findById(id);

        const compareHash = await compare(password, user.password);

        return compareHash;
    }

    generateToken (data) {
        return sign(data, 'odklskjdoajreasd', { expiresIn: '1d' });
    }
}

module.exports = User;