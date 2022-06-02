const bcrypt = require('bcryptjs');
const User = require('../../src/users/implementations/index');

describe('User', () => {
    test('should encrypt user password', async () => {
        const user = await new User().create({ 
            name: 'Gui', 
            email: 'gui@gmail.com', 
            password: '12345' 
        });

        const compareHash = await bcrypt.compare('12345', user.password);

        expect(compareHash).toBe(true)
    });
});