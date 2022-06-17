import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

it('Renders Navbar', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
