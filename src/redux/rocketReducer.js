import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const basURL = 'https://api.spacexdata.com/v3/rockets';

const GET_ROCKETS = 'rockets-store/Rocket/GET_ROCKECTS';

export const getRockets = createAsyncThunk(
  GET_ROCKETS,
  async () => {
    const response = await axios.get(basURL);
    return response.data;
  },
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      const states = state;
      states.status = 'Success';
      states.rockets = action.payload;
    });
  },
});

export default rocketSlice.reducer;
