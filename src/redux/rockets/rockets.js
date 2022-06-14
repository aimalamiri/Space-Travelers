const ROCKETS_LIST = 'SpaceTravelers/rockets/ROCKETS_LIST';

export default (state = [], action) => {
  switch (action.type) {
    case ROCKETS_LIST:
      return action.payload;
    default:
      return state;
  }
};

export const rocketsListAction = (payload) => ({
  type: ROCKETS_LIST,
  payload,
});
