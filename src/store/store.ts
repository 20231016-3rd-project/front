import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import persistedReducer from './rootReducer'; 

const store = configureStore({
  reducer: persistedReducer
});



export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;

export default store;