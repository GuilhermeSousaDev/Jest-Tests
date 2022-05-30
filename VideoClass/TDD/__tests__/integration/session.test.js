const User = require('../../src/users/implementations');

describe('Authentication', () => {
    test('Should be email to Equal for this', () => {
        const user = new User().create({
            name: 'Yugp',
            email: 'Yugo@gmail.com',
            password: '12345',
        });

        expect(user.email).toBe('Yugo@gmail.com')
    });
});
