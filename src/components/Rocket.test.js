import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rocket from './Rocket';
import store from '../redux/store';

jest.mock('../services/axios');

describe('Render Rocket Component', () => {
  let rocket;
  beforeEach(async () => {
    rocket = {
      rocket_name: 'Falcon 1',
      description:
        'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    };
  });

  it('renders correctly', async () => {
    render(
      <Provider store={store}>
        <Rocket rocket={rocket} />
      </Provider>,
    );

    const name = screen.getByText(rocket.rocket_name);
    expect(name).toBeInTheDocument();

    const description = screen.getByText(rocket.description);
    expect(description).toBeInTheDocument();
  });
});
