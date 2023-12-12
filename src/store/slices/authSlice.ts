import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, reissueAccessToken } from '../../apis/authApi/authApi';
import { RootState } from '../store';


// 토큰 만료 여부를 판단하는 함수
function isTokenExpired(expireDate) {
  const expireTime = new Date(expireDate).getTime();
  const currentTime = Date.now();
  return currentTime >= expireTime;
}

// 토큰의 만료 시간을 계산하는 함수
function calculateExpiresIn(expireDate) {
  const expireTime = new Date(expireDate).getTime();
  const currentTime = Date.now();
  return Math.max(0, (expireTime - currentTime) / 1000);
}

// 토큰 데이터 타입 정의
interface TokenData {
  accessToken: string;
  expiresIn: number;
  accessTokenExpireDate: string;
  issuedAt: string;
}

// 사용자 데이터 타입 정의
interface UserData {
  email: string;
  nickname: string;
  phone: string;
}

interface AuthState {
  isAuthenticated: boolean;
  isAdmin: boolean;
  isRefreshingToken: boolean;
  error: string | null;
  userData: UserData | null;
  tokenData: TokenData | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  isAdmin: false,
  isRefreshingToken: false,
  error: null,
  userData: null,
  tokenData: null,
}

export const submitLogin = createAsyncThunk(
  'auth/submitLogin',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await login(email, password);
      localStorage.setItem('accessToken', response.accessToken); // 여기에서만 토큰 저장
      return response; 
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const submitLogout = createAsyncThunk(
  'auth/submitLogout',
  async (_, { rejectWithValue }) => {
    try {
      await logout();
      localStorage.removeItem('accessToken'); 
    } catch (error: any) {
      console.error('로그아웃 중 에러 발생:', error);

      const errorMessage = '로그아웃 실패. 잠시 후 다시 시도해 주세요.';
      return rejectWithValue(errorMessage);
    }
  }
);

export const refreshAccessToken = createAsyncThunk(
  'auth/refreshAccessToken',
  async (_, { rejectWithValue }) => {
    try {
      const response = await reissueAccessToken();
      const { accessToken, accessTokenExpireDate, issuedAt } = response;
      if (accessToken) {
        return {
          accessToken,
          expiresIn: calculateExpiresIn(accessTokenExpireDate),
          accessTokenExpireDate,
          issuedAt
        };
      }
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
  },
  extraReducers: (builder) => {
    builder
    .addCase(submitLogin.pending, (state) => {
      state.isRefreshingToken = true;
    })
    .addCase(submitLogin.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.isRefreshingToken = false;
      state.userData = { 
        email: '', 
        nickname: action.payload.memberNickName, 
        phone: '' 
      }; 
      state.tokenData = {
        accessToken: action.payload.accessToken,
        expiresIn: calculateExpiresIn(action.payload.accessTokenExpireDate), 
        accessTokenExpireDate: action.payload.accessTokenExpireDate,
        issuedAt: action.payload.issuedAt 
      };
      state.error = null; 
      localStorage.setItem('accessToken', action.payload.accessToken); // 토큰저장주석처리
    })
    .addCase(submitLogin.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.isRefreshingToken = false;
      state.error = action.error.message ?? '알 수 없는 오류 발생'; 
    })
    .addCase(submitLogout.pending, (state) => {
      state.isRefreshingToken = true;
    })
    .addCase(submitLogout.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.isRefreshingToken = false;
      state.userData = initialState.userData;
      state.error = null;
      localStorage.removeItem('accessToken');
    })
    .addCase(submitLogout.rejected, (state, action) => {
      state.isRefreshingToken = false;
      state.error = action.error.message ?? '로그아웃 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.';
    }) 
      .addCase(refreshAccessToken.pending, (state) => {
        state.isRefreshingToken = true; 
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.tokenData = {
          ...state.tokenData,
          accessToken: action.payload.accessToken,
          expiresIn: calculateExpiresIn(action.payload.accessTokenExpireDate),
          accessTokenExpireDate: action.payload.accessTokenExpireDate,
          issuedAt: action.payload.issuedAt
        };
        state.error = null;
      })
      .addCase(refreshAccessToken.rejected, (state, action) => {
        state.isAuthenticated = false; // 토큰 재발급 실패
        state.isRefreshingToken = false;
        
        state.error = action.error.message ?? '토큰 재발급 중 오류 발생';
      })
    },
  });
  
  export const { setAuthenticated, } = authSlice.actions;
  export default authSlice.reducer;