const promise = require("../AsyncTests");

describe('Async Tests', () => {
    test('should be promise resolved', async () => {
        expect(await promise).toBe('Promise Resolvida');
    });
});