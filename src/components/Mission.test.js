import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from './Mission';
import store from '../redux/store';

jest.mock('../services/axios');

describe('Render Mission Component', () => {
  let mission;
  beforeEach(async () => {
    mission = {
      mission_id: '9D1B7E0',
      mission_name: 'Thaicom',
      description: 'Thaicom is the name of a series of communications satellites.',
    };
  });

  it('renders correctly', async () => {
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <Mission mission={mission} />
          </tbody>
        </table>
      </Provider>,
    );

    const id = screen.getByText(mission.mission_id);
    expect(id).toBeInTheDocument();

    const name = screen.getByText(mission.mission_name);
    expect(name).toBeInTheDocument();

    const description = screen.getByText(mission.description);
    expect(description).toBeInTheDocument();
  });
});
