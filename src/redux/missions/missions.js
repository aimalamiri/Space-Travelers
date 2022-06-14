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
  const missions = await axios.get('missions');
  dispatch({
    type: MISSIONS_LIST,
    payload: missions.data,
  });
};
