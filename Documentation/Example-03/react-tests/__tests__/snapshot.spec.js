import renderer from 'react-test-renderer';

describe('Snapshot', () => {
    test('renderer correctly', () => {
        const three = renderer.create(
            <a href="http://www.instagram.com">Instagram</a>
        ).toJSON()

        expect(three).toMatchSnapshot()
    });
});