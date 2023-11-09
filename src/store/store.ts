import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './slices/restaurantSlice';
import regionReducer from './slices/regionSlice';
import sortReducer from './slices/sortSlice';
import modalReducer from './slices/modalSlice';
import keywordReducer from './slices/keywordSlice';
import bestReducer from './slices/bestSlice';
import myLikeReducer from './slices/myLikeSlice';
import signupReducer from '../pages/signUp/signupSlice';

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer, // state의 최상위 객체
    region: regionReducer,
    sort: sortReducer,
    isOpen: modalReducer,
    keyword: keywordReducer,
    best: bestReducer,
    mylike: myLikeReducer,
    signup: signupReducer,
  },
});

export default store;
