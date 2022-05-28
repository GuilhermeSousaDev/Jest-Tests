const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
});

test('atribuição de objeto', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

test('null', () => {
    const n = null;

    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).toBeFalsy();
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy();
});

test('two more two', () => {
    const sum = 2 + 2;

    expect(sum).toBeGreaterThan(3)
    expect(sum).toBeGreaterThanOrEqual(4)
    expect(sum).toBeLessThan(5)
    expect(sum).toBeLessThanOrEqual(4.5)
});

test('add numbers float', () => {
    const num = 0.1 + 0.2;

    expect(num).toBeCloseTo(0.3)
});