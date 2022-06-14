import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

export default configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
  middleware: [logger],
});
