import { createSlice } from '@reduxjs/toolkit';

export const myLikeSlice = createSlice({
  name: 'mylike',
  initialState: { myLikeInfo: [] },
  reducers: {
    getMyRestaurants(state, action) {
      state.myLikeInfo = action.payload;
    },
  },
});

export const { getMyRestaurants } = myLikeSlice.actions;
export default myLikeSlice.reducer;
