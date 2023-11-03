import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './slices/restaurantSlice';

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer, // state의 최상위 객체
  },
});

export default store;
