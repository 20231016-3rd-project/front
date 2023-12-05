import { configureStore, ThunkAction, Action }  from '@reduxjs/toolkit';
import restaurantReducer from './slices/restaurantSlice';
import regionReducer from './slices/regionSlice';
import sortReducer from './slices/sortSlice';
import modalReducer from './slices/modalSlice';
import keywordReducer from './slices/keywordSlice';
import bestReducer from './slices/bestSlice';
import myLikeReducer from './slices/myLikeSlice';
import signupReducer from '../pages/signUp/signupSlice';
import signinReducer from '../pages/signIn/signinSlice';

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer, // state의 최상위 객체
    region: regionReducer,
    sort: sortReducer,
    modal: modalReducer,
    keyword: keywordReducer,
    best: bestReducer,
    mylike: myLikeReducer,
    signup: signupReducer,
    signin: signinReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export default store;
