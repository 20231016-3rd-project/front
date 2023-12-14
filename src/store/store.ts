import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/authSlice';
import restaurantReducer from './slices/restaurantSlice';
import regionReducer from './slices/regionSlice';
import sortReducer from './slices/sortSlice';
import modalReducer from './slices/modalSlice';
import keywordReducer from './slices/keywordSlice';
import bestReducer from './slices/bestSlice';
import myLikeReducer from './slices/myLikeSlice';
//import signupReducer from './slices/signupSlice';

const authPersistConfig = {
  key: 'auth', 
  storage,
  whitelist: ['auth']
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);


const store = configureStore({
  reducer: {
    restaurant: restaurantReducer, // state의 최상위 객체
    auth: authReducer, 
    region: regionReducer,
    sort: sortReducer,
    modal: modalReducer,
    keyword: keywordReducer,
    best: bestReducer,
    mylike: myLikeReducer,
    //signup: signupReducer,
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;