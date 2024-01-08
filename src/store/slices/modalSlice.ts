import { createSlice } from '@reduxjs/toolkit';


export const modalSlice = createSlice({
  name: 'modal',
  initialState: { openInfo: false },
  reducers: {
    setIsOpen(state, action) {
      state.openInfo = action.payload;
    },
  },
});

export const { setIsOpen } = modalSlice.actions;
export default modalSlice.reducer;