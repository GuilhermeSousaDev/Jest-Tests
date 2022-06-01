const request = require('supertest');

const app = require('../../src/app');
const User = require('../../src/users/implementations');

describe('Authentication', () => {
    test('should authenticate with valid credentials', () => {
        const user = new User().create({
            name: 'Yugo',
            email: 'Yugo@gmail.com',
            password: '12345',
        });

        const response = request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '12345'
            });
        
        expect(response.status).toBe(200)
    });
});
