import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const basURL = 'https://api.spacexdata.com/v3/rockets';

const GET_ROCKETS = 'rockets-store/Rocket/GET_ROCKECTS';

export const getRockets = createAsyncThunk(
  GET_ROCKETS,
  async () => {
    const response = await fetch(basURL);
    return response.json();
  },
);

const initialState = [];

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserve: (state, action) => state.map((rocket) => {
      if (rocket.id !== action.payload.id) {
        return rocket;
      }
      return { ...rocket, reserved: !rocket.reserved };
    }),

  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => action.payload);
  },
});

export const { reserve } = rocketSlice.actions;
export default rocketSlice.reducer;
