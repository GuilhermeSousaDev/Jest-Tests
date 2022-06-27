import renderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  const component = renderer.create(
    <App page="http://www.facebook.com">Facebook</App>
  );
  
  let tree = component.toJSON();

  renderer.act(() => {
    tree.props.onMouseEnter();
  });

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
