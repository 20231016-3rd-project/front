import { createSlice } from '@reduxjs/toolkit';


export const regionSlice = createSlice({
  name: 'region',
  initialState: { regionInfo: { city: '서울특별시', district: '전체', dong: '전체' } },
  reducers: {
    getRegion(state, action) {
      state.regionInfo = action.payload;
    },
  },
});

export const { getRegion } = regionSlice.actions;
export default regionSlice.reducer;
