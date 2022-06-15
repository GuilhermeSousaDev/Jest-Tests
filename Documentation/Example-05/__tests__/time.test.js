jest.useFakeTimers()
jest.spyOn(global, 'setTimeout');

test('waits 1 second before ending the game', () => {
    const timerGame = require('../src/index');

    timerGame();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

test('calls the callback after 1 second', () => {
    const timerGame = require('../src/index');

    const callback = jest.fn();

    timerGame(callback);

    expect(callback).not.toBeCalled();

    jest.runAllTimers();

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
});