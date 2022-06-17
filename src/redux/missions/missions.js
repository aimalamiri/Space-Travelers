import axios from '../../services/axios';

const MISSIONS_LIST = 'SpaceTravelers/missions/MISSIONS_LIST';
const JOIN_MISSION = 'SpaceTravelers/missions/JOIN_MISSION';

export default (state = [], action) => {
  switch (action.type) {
    case MISSIONS_LIST:
      return action.payload;

    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, isJoined: !mission.isJoined };
      });

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

export const joinMissionAction = (id) => (dispatch) => {
  dispatch({
    type: JOIN_MISSION,
    payload: id,
  });
};
