import axios from '../../services/axios';

const GET_ROCKETS = 'spacetravelers/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'spacetravelers/rockets/RESERVE_ROCKET';

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;

    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });

    default:
      return state;
  }
};

export const getRocketList = () => (dispatch) => {
  axios.get('rockets').then((res) => {
    dispatch({
      type: GET_ROCKETS,
      payload: res.data,
    });
  });
};

export const reserveRocket = (id) => (dispatch) => {
  dispatch({
    type: RESERVE_ROCKET,
    payload: id,
  });
};

export default rocketsReducer;
