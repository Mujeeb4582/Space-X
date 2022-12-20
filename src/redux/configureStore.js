import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocketReducer';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;
