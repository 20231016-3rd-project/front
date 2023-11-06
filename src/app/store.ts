// store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// 기본 내보내기를 사용하여 signupReducer를 가져옵니다.
import signupReducer from '../pages/signUp/signupSlice';

// 여기에 다른 리듀서들을 import합니다.

const rootReducer = combineReducers({
  // 이제 signupReducer는 signupSlice.ts 파일에서 내보낸 reducer입니다.
  signup: signupReducer,
  // ... 다른 리듀서들 ...
});

export const store = configureStore({
  reducer: rootReducer,
});