import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  detections: [],
  stats: {},
};

export const detectionSlice = createSlice({
  name: 'detection',
  initialState,
  reducers: {
    addDetection: (state, action) => {
      state.detections.push(action.payload);
    },
    updateStats: (state, action) => {
      state.stats = action.payload;
    },
  },
});

export const { addDetection, updateStats } = detectionSlice.actions;

export default detectionSlice.reducer;