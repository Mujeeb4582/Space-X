import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../routes/mission';

const GET_MISSIONS = 'Space-X/missions/GET_MISSIONS';
const initialState = [];

export const getMissions = createAsyncThunk(
  (GET_MISSIONS),
  async () => {
    const response = await fetch(baseUrl);
    const results = response.json();
    return results;
  },
);

const spaceMissionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => (action.payload));
  },
});
export default spaceMissionSlice.reducer;
