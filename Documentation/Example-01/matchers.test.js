describe('String Tests', () => {
    test('does not exist I in word team', () => {
        expect('team').not.toMatch(/I/)
    });
    
    test('but exists "stop" in Christoph', () => {
        expect('Christoph').toMatch(/stop/)
    });
});

describe('Array Tests', () => {
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
});

function compileAndroidCode() {
    throw new Error('você está usando o JDK errado');
}

describe('Exceptions', () => {
    test('Compile Android Code segue conforme esperado', () => {
        expect(() => compileAndroidCode).toThrow('você está usando o JDK errado')
    });
});