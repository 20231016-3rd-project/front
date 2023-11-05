import { createSlice } from '@reduxjs/toolkit';


export const sortSlice = createSlice({
  name: 'sort',
  initialState: { sortInfo: "review" },
  reducers: {
    getSort(state, action) {
      state.sortInfo = action.payload;
    },
  },
});

export const { getSort } = sortSlice.actions;
export default sortSlice.reducer;