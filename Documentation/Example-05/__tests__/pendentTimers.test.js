jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')

describe('infiniteTimerGame', () => {
    test('schedules a 10-second timer after 1 second', () => {
        const infiniteTimerGame = require('../src/infiniteTimerGame')
        const callback = jest.fn()

        infiniteTimerGame(callback)

        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

        jest.runOnlyPendingTimers()

        expect(callback).toBeCalled()

        expect(setTimeout).toHaveBeenCalledTimes(2);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
    });
})