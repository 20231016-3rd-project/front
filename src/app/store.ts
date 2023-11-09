import { configureStore, combineReducers } from '@reduxjs/toolkit';
import signupReducer from '../pages/signUp/signupSlice';

const rootReducer = combineReducers({
  signup: signupReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});