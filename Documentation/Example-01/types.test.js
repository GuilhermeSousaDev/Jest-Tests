test('does not exist I in word team', () => {
    expect('team').not.toMatch(/I/)
});

test('but exists "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/)
});