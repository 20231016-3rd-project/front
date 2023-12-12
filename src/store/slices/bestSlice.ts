import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { bestRestaurant } from '../../apis/getRestaurantApi/getRestaurant';

export const bestSlice = createSlice({
  name: 'best',
  initialState: { bestInfo: [] },
  reducers: {
    getBestRestaurants(state, action) {
      console.log(state, action);
      state.bestInfo = action.payload;
    },
  },
});

export const { getBestRestaurants } = bestSlice.actions;
export default bestSlice.reducer;

export const fetchBestRestaurants: any = (key: string) => {
  return async (dispatch: any) => {
    try {
      const response = await bestRestaurant(key);
      console.log('elm', response);
      dispatch(getBestRestaurants(response));
    } catch (error) {
      console.log(error);
    }
  };
};
