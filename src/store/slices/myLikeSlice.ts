import { createSlice } from '@reduxjs/toolkit';
import { myRestaurant } from '../../apis/getRestaurantApi/getRestaurant';

export const myLikeSlice = createSlice({
  name: 'myLike',
  initialState: { test: true, myLikeInfo: [] },
  reducers: {
    getMyRestaurants(state, action) {
      console.log(state, action);
      state.myLikeInfo = action.payload;
    },
  },
});

export const { getMyRestaurants } = myLikeSlice.actions;
export default myLikeSlice.reducer;

export const fetchMyRestaurants: any = () => {
  return async (dispatch: any) => {
    try {
      const response = await myRestaurant();
      console.log('elm', response);
      dispatch(getMyRestaurants(response));
    } catch (error) {
      console.log(error);
    }
  };
};
