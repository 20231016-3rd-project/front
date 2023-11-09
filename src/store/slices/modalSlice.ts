import { createSlice } from '@reduxjs/toolkit';


export const modalSlice = createSlice({
  name: 'modalopen',
  initialState: { isOpen: false },
  reducers: {
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = modalSlice.actions;
export default modalSlice.reducer;