class User {
    #users = [
        {
            id: 1,
            name: 'Guilherme',
            email: 'Guilherme@gmail.com',
            password: '12345'
        },
        {
            id: 2,
            name: 'Rodrigo',
            email: 'Rodrigo@gmail.com',
            password: '12345'
        },
        {
            id: 3,
            name: 'Pedro',
            email: 'Pedro@gmail.com',
            password: '12345'
        },
        {
            id: 4,
            name: 'Bruno',
            email: 'Bruno@gmail.com',
            password: '12345'
        },
        {
            id: 5,
            name: 'Gustavo',
            email: 'Gustavo@gmail.com',
            password: '12345'
        },
        {
            id: 6,
            name: 'Julio',
            email: 'Julio@gmail.com',
            password: '12345'
        }
    ];

    create ({ name, email, password }) {
        this.#users.push({
            id: this.#users[this.#users.length - 1].id + 1,
            name,
            email,
            password,
        });

        return this.#users[this.#users.length - 1];
    }
}

module.exports = User;