import { Provider } from 'react-redux';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import Missions from './Missions';
import Profile from './Profile';
import store from '../redux/store';
import axios from '../services/axios';

jest.mock('../services/axios');

describe('Test missions page', () => {
  beforeEach(async () => {
    const result = {
      data: [
        {
          mission_id: '9D1B7E0',
          mission_name: 'Thaicom',
          description: 'Thaicom is the name of a series of communications satellites.',
        },
        {
          mission_id: 'F4F83DE',
          mission_name: 'Telstar',
          description: 'Telstar 19V (Telstar 19 Vantage) is a communication satellite.',
        },
        {
          mission_id: 'F3364BF',
          mission_name: 'Iridium NEXT',
          description: 'In 2017, Iridium began launching Iridium NEXT.',
        },
      ],
    };
    await axios.get.mockResolvedValue(result);
  });

  it('renders the missions page', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    await waitFor(() => {
      expect(screen.getAllByText('Join Mission').length).toBeGreaterThan(1);
    });
  });

  it('Add or remove the mission from the joined missions list', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const join = await screen.findAllByText('Join Mission');
    fireEvent.click(join[0]);

    const leave = await screen.findAllByText('Leave Mission');
    fireEvent.click(leave[0]);

    const buttons = await screen.findAllByText('Join Mission');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('Shows the joined missions in the profile page', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const joinButtons = await screen.findAllByText('Join Mission');
    fireEvent.click(joinButtons[0]);
    render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(screen.findByText('Thaicom')).toBeTruthy();
  });
});
