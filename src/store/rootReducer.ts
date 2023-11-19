import { combineReducers } from '@reduxjs/toolkit';
import restaurantReducer from './slices/restaurantSlice';
import regionReducer from './slices/regionSlice';
import sortReducer from './slices/sortSlice';
import modalReducer from './slices/modalSlice';
import keywordReducer from './slices/keywordSlice';
import bestReducer from './slices/bestSlice';
import myLikeReducer from './slices/myLikeSlice';
import signupReducer from '../pages/signUp/signupSlice';
import signinReducer from '../pages/signIn/signinSlice';

const reducer = combineReducers({
  restaurantReducer,
  regionReducer,
  sortReducer,
  modalReducer,
  keywordReducer,
  bestReducer,
  myLikeReducer,
  signupReducer,
  signinReducer
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
