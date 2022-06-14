const MISSIONS_LIST = 'SpaceTravelers/missions/MISSIONS_LIST';

export default (state = [], action) => {
  switch (action.type) {
    case MISSIONS_LIST:
      return action.payload;
    default:
      return state;
  }
};

export const missionsListAction = (payload) => ({
  type: MISSIONS_LIST,
  payload,
});
