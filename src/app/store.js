import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [logger],
});
