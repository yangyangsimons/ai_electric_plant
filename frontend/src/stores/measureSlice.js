import { createSlice } from '@reduxjs/toolkit';

export const measureSlice = createSlice({
  name: 'measure',
  initialState: {
    isActive: false,
  },
  reducers: {
    toggleMeasure: (state) => {
      state.isActive = !state.isActive;
    }
  },
});

export const { toggleMeasure } = measureSlice.actions;

export default measureSlice.reducer;