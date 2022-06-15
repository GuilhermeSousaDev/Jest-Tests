const EndPoint = require("../src")

describe('Async Request Tests', () => {
    test('should be a async property url', async () => {
        const data = await EndPoint.getPhotos()

        data.map(vl => expect(vl).toHaveProperty('url'))
    });

    test('error with async/await', async () => {
        try {
            await EndPoint.getPhotos()
        } catch (error) {
            expect(error).toHaveProperty('message')
        }
    });
});