/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';
import spaceMissionReducer from './mission/missionReducer';

const store = configureStore({
  reducer: {
    mission: spaceMissionReducer,
  },
});
export default store;
