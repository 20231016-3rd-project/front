import { createSlice } from '@reduxjs/toolkit';

export const bestSlice = createSlice({
  name: 'best',
  initialState: { bestInfo: [] },
  reducers: {
    getBestRestaurants(state, action) {
      state.bestInfo = action.payload;
    },
  },
});

export const { getBestRestaurants} =
 bestSlice.actions;
export default bestSlice.reducer;
