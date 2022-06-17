import { Provider } from 'react-redux';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import Rockets from './Rockets';
import MyProfile from './Profile';
import store from '../redux/store';
import axios from '../services/axios';

jest.mock('../services/axios');

describe('Test Rockets page', () => {
  beforeEach(async () => {
    const state = {
      data: [
        {
          id: 1,
          name: 'Falcon 1',
          description:
            'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
          flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
        },
        {
          id: 2,
          name: 'Falcon 9',
          description:
            'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
          flickr_images: ['https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg'],
        },
      ],
    };
    await axios.get.mockResolvedValue(state);
  });

  it('render the rockets page', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    await waitFor(() => {
      expect(screen.getAllByText('Reserve Rocket').length).toBeGreaterThan(0);
    });
  });

  it('Marks a rocket as a reserved rocket when the user clicks the reserve button', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const reserveButtons = await screen.findAllByText('Reserve Rocket');
    fireEvent.click(reserveButtons[0]);
    const badges = await screen.findAllByText('Reserved');
    expect(badges.length).toBeGreaterThan(0);
  });

  it('Shows the reserved rocket in the profile page', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const reserveButtons = await screen.findAllByText('Reserve Rocket');
    fireEvent.click(reserveButtons[0]);
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(screen.findByText('Falcon 1')).toBeTruthy();
  });

  it('Takes a snapshot', async () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    await expect(tree).toMatchSnapshot();
  });
});
