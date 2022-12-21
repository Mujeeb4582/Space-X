import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v3/missions';
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
  reducers: {
    joinMission: {
      reducer: (state, action) => state.map((mission) => (
        mission.mission_id === action.payload ? { ...mission, reserved: true } : mission
      )),
      prepare: (id) => ({
        payload: id,
      }),
    },
    leaveMission: {
      reducer: (state, action) => state.map((mission) => (
        mission.mission_id === action.payload ? { ...mission, reserved: false } : mission
      )),
      prepare: (id) => ({
        payload: id,
      }),
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => (action.payload));
  },
});
const { joinMission, leaveMission } = spaceMissionSlice.actions;
export { joinMission, leaveMission };
export default spaceMissionSlice.reducer;
