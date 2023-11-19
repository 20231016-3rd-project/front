import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, reissueAccessToken } from '../../apis/authApi/authApi';

// Auth 상태 정의
interface TokenData {
  accessToken: string;
  expiresIn: number;
}

interface UserData {
  email: string;
  password: string;
  nickname: string;
  phone: string;
}

interface AuthState {
  isAuthenticated: boolean;
  isRefreshingToken: boolean;
  error: string | null;
  userData: UserData | null;
  tokenData: TokenData | null; // 토큰 데이터 필드 추가
};

const initialState: AuthState = {
  isAuthenticated: false,
  isRefreshingToken: false,
  error: null,
  userData: null,
  tokenData: null, // 초기 상태에 tokenData 추가
};



// 비동기 로그인 액션 생성
export const submitLogin = createAsyncThunk(
  'auth/submitLogin',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await login(email, password);
      return response.data;
    } catch (error: any) {
      if (!error.response) throw error;
      return rejectWithValue(error.response.data);
    }
  }
);

// 비동기 로그아웃 액션 생성
export const submitLogout = createAsyncThunk(
  'auth/submitLogout',
  async (_, { rejectWithValue }) => {
    try {
      await logout();
    } catch (error: any) {
      if (!error.response) throw error;
      return rejectWithValue(error.response.data);
    }
  }
);

// 비동기 액세스 토큰 재발급 액션 생성
export const refreshAccessToken = createAsyncThunk(
  'auth/refreshAccessToken',
  async (_, { rejectWithValue }) => {
    try {
      const response = await reissueAccessToken();
      return response.data; // 여기서 반환되는 데이터가 action.payload에 할당됩니다.
    } catch (error: any) {
      if (!error.response) throw error;
      return rejectWithValue(error.response.data);
    }
  }
);
// Auth Slice 생성
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    // 필요한 다른 리듀서들을 추가
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLogin.pending, (state) => {
        state.isRefreshingToken = true; // 로그인 시도 중
      })
      .addCase(submitLogin.fulfilled, (state, action) => {
        state.isAuthenticated = true; // 로그인 성공
        state.isRefreshingToken = false;
        state.userData = action.payload; // 서버로부터 받은 사용자 데이터 저장
        state.error = null; // 에러 초기화
      })
      .addCase(submitLogin.rejected, (state, action) => {
        state.isAuthenticated = false; // 로그인 실패
        state.isRefreshingToken = false;
        // action.error.message가 undefined일 경우 대체 문자열 사용
        state.error = action.error.message ?? '알 수 없는 오류 발생';
      })
      .addCase(submitLogout.pending, (state) => {
        state.isRefreshingToken = true; // 로그아웃 시도 중
      })
      .addCase(submitLogout.fulfilled, (state) => {
        state.isAuthenticated = false; // 로그아웃 성공
        state.isRefreshingToken = false;
        state.userData = null; // 사용자 데이터 초기화
        state.error = null; // 에러 초기화
      })
      .addCase(submitLogout.rejected, (state, action) => {
        state.isRefreshingToken = false;
        // action.error.message가 undefined일 경우 대체 문자열 사용
        state.error = action.error.message ?? '로그아웃 중 오류 발생';
      })
      .addCase(refreshAccessToken.pending, (state) => {
        state.isRefreshingToken = true; // 토큰 재발급 시도 중
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isRefreshingToken = false;
        // 토큰 정보 업데이트 로직
        state.tokenData = action.payload; // 토큰 정보를 상태에 저장
        state.error = null;
      })
      .addCase(refreshAccessToken.rejected, (state, action) => {
        state.isAuthenticated = false; // 토큰 재발급 실패
        state.isRefreshingToken = false;
        // action.error.message가 undefined일 경우 대체 문자열 사용
        state.error = action.error.message ?? '토큰 재발급 중 오류 발생';
      })
    },
  });
  
export const { setAuthenticated } = authSlice.actions;
export default authSlice.reducer;