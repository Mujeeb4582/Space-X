/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';
import spaceMissionReducer, { getMissions } from './mission/missionReducer';

const store = configureStore({
  reducer: {
    mission: spaceMissionReducer,
  },
});
store.dispatch(getMissions());
export default store;
