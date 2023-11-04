import { combineReducers } from '@reduxjs/toolkit';
import restaurantReducer from './slices/restaurantSlice';
import regionReducer from './slices/regionSlice';

const reducer = combineReducers({
  restaurantReducer,
  regionReducer,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
