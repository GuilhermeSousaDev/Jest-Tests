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

    create ({ name, email, password }) {
        this.#users.push({
            id: this.#users[this.#users.length - 1].id + 1,
            name,
            email,
            password,
        });

        return this.#users[this.#users.length - 1];
    }

    delete (id) {
        this.#users = this.#users.filter(user => {
            user.id !== id;
        });
    }
}

module.exports = User;