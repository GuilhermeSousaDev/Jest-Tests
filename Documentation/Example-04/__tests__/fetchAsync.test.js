const EndPoint = require("../src")

describe('Async Request Tests', () => {
    test('should be a property url', () => {
        EndPoint.getPhotos().then(data => {
            data.map(vl => expect(vl).toHaveProperty('url'))
        });
    });

    test('should be a async property url', async () => {
        const data = await EndPoint.getPhotos()

        data.map(vl => expect(vl).toHaveProperty('url'))
    });
});