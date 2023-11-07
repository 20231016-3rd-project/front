import { createSlice } from '@reduxjs/toolkit';

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: { restInfo: [] },
  reducers: {
    getAllRestaurants(state, action) {
      state.restInfo = action.payload;
    },
    getSearchRestaurants(state, action) {
      state.restInfo = action.payload;
    },
  },
});

export const { getAllRestaurants, getSearchRestaurants } =
  restaurantSlice.actions;
export default restaurantSlice.reducer;
