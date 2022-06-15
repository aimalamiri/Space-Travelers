import axios from '../../services/axios';

const MISSIONS_LIST = 'SpaceTravelers/missions/MISSIONS_LIST';

export default (state = [], action) => {
  switch (action.type) {
    case MISSIONS_LIST:
      return action.payload;
    default:
      return state;
  }
};

export const missionsListAction = () => async (dispatch) => {
  const response = await axios.get('missions');
  const missions = response.data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  dispatch({
    type: MISSIONS_LIST,
    payload: missions,
  });
};
