import axios from '../../services/axios';
import * as actions from './actions';

const stateInit = [];

const rocketsReducer = (state = stateInit, action) => {
  switch (action.type) {
    case actions.ADD_RESERVATION:
      return [...state.map((r) => (r.id !== action.payload ? r : { ...r, reserv: true }))];

    case actions.GET_ROCKETS:
      return [...state, action.payload];

    case actions.DELETE_RESERVATION:
      return state.map((r) => (r.id !== action.payload ? r : { ...r, reserv: false }));

    default:
      return state;
  }
};

export const getRocketList = () => (dispatch) => {
  axios.get('rockets').then((res) => {
    dispatch(actions.getRockets(res.data));
  });
};

export default rocketsReducer;
