import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './slices/restaurantSlice';
import regionReducer from './slices/regionSlice';
import sortReducer from './slices/sortSlice';
import modalReducer from './slices/modalSlice';
import keywordReducer from './slices/keywordSlice';
import signupReducer from '../pages/signUp/signupSlice';
const store = configureStore({
  reducer: {
    restaurant: restaurantReducer, // state의 최상위 객체
    region: regionReducer,
    sort: sortReducer,
    isOpen: modalReducer,
    keyword: keywordReducer,
    signup: signupReducer,
  },
});

export default store;
