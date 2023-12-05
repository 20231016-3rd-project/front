import { combineReducers } from '@reduxjs/toolkit';
import restaurant from './slices/restaurantSlice';
import region from './slices/regionSlice';
import sort from './slices/sortSlice';
import modal from './slices/modalSlice';
import keyword from './slices/keywordSlice';
import best from './slices/bestSlice';
import myLike from './slices/myLikeSlice';
import signup from '../pages/signUp/signupSlice';
import signin from '../pages/signIn/signinSlice';

const reducer = combineReducers({
  restaurant,
  region,
  sort,
  modal,
  keyword,
  best,
  myLike,
  signup,
  signin,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
