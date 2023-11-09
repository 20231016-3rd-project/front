import { createSlice } from '@reduxjs/toolkit';

export const keywordSlice = createSlice({
  name: 'keyword',
  initialState: { keyword: '', key: '' },
  reducers: {
    setKeyword(state, action) {
      state.keyword = action.payload;
    },
    setKey(state, action) {
        state.key = action.payload;
      },
  },
});

export const { setKeyword, setKey } = keywordSlice.actions;
export default keywordSlice.reducer;
