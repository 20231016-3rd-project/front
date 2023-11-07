import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './slices/restaurantSlice';
import regionReducer from './slices/regionSlice';
import sortReducer from './slices/sortSlice';
import modalReducer from './slices/modalSlice';
import keywordReducer from './slices/keywordSlice';

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer, // state의 최상위 객체
    region: regionReducer,
    sort: sortReducer,
    isOpen: modalReducer,
    keyword: keywordReducer,
  },
});

export default store;
