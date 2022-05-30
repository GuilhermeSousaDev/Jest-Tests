//String
test('does not exist I in word team', () => {
    expect('team').not.toMatch(/I/)
});

test('but exists "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/)
});

//Arrays and Iterables

test('The buy list should be the item milk', () => {
    const list = [
        'fraldas',
        'kleenex',
        'sacos de lixo',
        'papel toalha',
        'leite',
    ];

    expect(list).toContain('leite')
});