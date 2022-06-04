const request = require('supertest');
const faker = require('faker');

const app = require('../../src/app');
const User = require('../../src/users/implementations');

describe('Authentication', () => {
    test('should authenticate with valid credentials', () => {
        const user = new User().create({
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: '12345',
        });

        console.log(user);

        request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '12345'
            })
            .end((err, res) => {
                expect(res.status).toBe(200);
            });
    });

    test('should not authenticate with invalid credentials', async () => {
        const user = new User().create({
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: '12345',
        });

        request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123'
            })
            .end((err, res) => {
                expect(res.status).toBe(401);
            });
    });

    test('should return jwt token when authenticated', async () => {
        const user = new User().create({
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: '12345',
        });

        request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '12345'
            })
            .end((err, res) => {
                expect(res.body).toHaveProperty('token');
            });
    });

    test('should be able to acess private routes when authenticated', async () => {
        const user = await new User().create({
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: '12345',
        });

        request(app)
            .get('/dashboard')
            .set('Authorization', `Bearer ${new User().generateToken(user.id)}`)
            .end((err, res) => {
                expect(res.status).toBe(200)
            });
    });
});
