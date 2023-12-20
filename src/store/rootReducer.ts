import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import restaurant from './slices/restaurantSlice';
import region from './slices/regionSlice';
import sort from './slices/sortSlice';
import modal from './slices/modalSlice';
import keyword from './slices/keywordSlice';
import best from './slices/bestSlice';
import myLike from './slices/myLikeSlice';
import auth from './slices/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'] // auth 리듀서만 영속화
};

const persistedAuthReducer = persistReducer(persistConfig, auth);

const Reducer = combineReducers({
  restaurant,
  region,
  sort,
  modal,
  keyword,
  best,
  myLike,
  auth: persistedAuthReducer, 
});

export type ReducerType = ReturnType<typeof Reducer>;
export default Reducer;