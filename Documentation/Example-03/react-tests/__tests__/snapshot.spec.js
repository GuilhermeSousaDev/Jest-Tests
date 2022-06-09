describe('Snapshot', () => {
    /*test('renderer correctly', () => {
        const three = renderer.create(
            <a href="http://www.instagram.com">Instagram</a>
        ).toJSON()

        expect(three).toMatchSnapshot()
    }); */

    it('will fail every time', () => {
        const user = {
          createdAt: new Date(),
          id: Math.floor(Math.random() * 20),
          name: 'LeBron James',
        };
      
        expect(user).toMatchSnapshot();
      });
});