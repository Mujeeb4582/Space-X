import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './rocketReducer';
import spaceMissionReducer from './mission/missionReducer';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    mission: spaceMissionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
