const EndPoint = require("../src")

describe('Async Request Tests', () => {
    test('should be a property url', () => {
        EndPoint.getPhotos().then(data => {
            data.map(vl => expect(vl).toHaveProperty('url'))
        });
    });
});