import axios from '../../services/axios';

const GET_ROCKETS = 'spacetravelers/rockets/GET_ROCKETS';

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
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

export default rocketsReducer;
