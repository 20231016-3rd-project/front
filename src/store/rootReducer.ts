import { combineReducers } from '@reduxjs/toolkit';
import restaurant from './slices/restaurantSlice';
import region from './slices/regionSlice';
import sort from './slices/sortSlice';
import modal from './slices/modalSlice';
import keyword from './slices/keywordSlice';
import best from './slices/bestSlice';
import myLike from './slices/myLikeSlice';
//import signup from './slices/signupSlice';
import auth from './slices/authSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'] 
};

const rootReducer = combineReducers({
  restaurant,
  region,
  sort,
  modal,
  keyword,
  best,
  myLike,
  //signup,
  auth,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type ReducerType = ReturnType<typeof persistedReducer>;
export default persistedReducer;