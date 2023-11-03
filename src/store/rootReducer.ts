import { combineReducers } from "@reduxjs/toolkit";
import restaurantReducer from './slices/restaurantSlice';

const reducer = combineReducers({
    restaurantReducer
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;