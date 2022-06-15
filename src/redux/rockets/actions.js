export const ADD_RESERVATION = 'spacetravelers/rockets/ADD_RESERVATION';
export const DELETE_RESERVATION = 'spacetravelers/rockets/DELETE_RESERVATION';
export const GET_ROCKETS = 'spacetravelers/rockets/GET_ROCKETS';

export const addReservation = (payload) => ({
  type: ADD_RESERVATION,
  payload,
});

export const getRockets = (payload) => {
  const rockets = payload.forEach((e) => {
    e.reserv = false;
  });
  return {
    type: GET_ROCKETS,
    payload: rockets,
  };
};

export const deleteReservation = (payload) => ({
  type: DELETE_RESERVATION,
  payload,
});
