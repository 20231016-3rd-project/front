import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, reissueAccessToken } from '../../apis/authApi/authApi';

// 토큰 데이터 타입 정의
interface TokenData {
  AccessToken: string;
  expiresIn: number; //만료시간 설정
  accessTokenExpireDate: string; 
  issuedAt: string;
}

interface AuthState {
  isAuthenticated: boolean;
  isAdmin: boolean;

}
// 사용자 데이터 타입 정의
interface UserData {
  email: string;
  nickname: string; 
  phone: string; 
}

// 인증 상태 타입 정의
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
};

// 비동기 로그인 액션 생성
export const submitLogin = createAsyncThunk(
  'auth/submitLogin',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await login(email, password);
      
      
      const isAdmin = Boolean(response.adminToken);

      return {
        nickname: response.memberNickName,
        tokenData: {
          AccessToken: response.AccessToken,
          accessTokenExpireDate: response.accessTokenExpireDate,
          issuedAt: response.issuedAt,
        },
        isAdmin 
      };

    } catch (error: any) {
      if (!error.response) throw error;
      return rejectWithValue(error.response.data);
    }
  }
);

// 비동기 로그아웃 액션 생성
export const submitLogout = createAsyncThunk<void, void>(
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
      
      return response.data; 

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
    setAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
    // 필요한 다른 리듀서들을 추가
  },
  extraReducers: (builder) => {
    builder
      // 로그인 처리 로직
      .addCase(submitLogin.pending, (state) => {
        state.isRefreshingToken = true;
      })
      .addCase(submitLogin.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isAdmin = action.payload.isAdmin; 
        state.isRefreshingToken = false;
        state.userData = { 
          email: '', 
          nickname: action.payload.nickname, // 닉네임 저장
          phone: '' 
        }; 
        state.tokenData = {
          AccessToken: action.payload.tokenData.AccessToken,
          expiresIn: 0,
          accessTokenExpireDate: action.payload.tokenData.accessTokenExpireDate,
          issuedAt: action.payload.tokenData.issuedAt,
        };
        state.error = null; // 에러 초기화
      })
      

      .addCase(submitLogin.rejected, (state, action) => {
        state.isAuthenticated = false; // 로그인 실패
        state.isRefreshingToken = false;
        state.error = action.error.message ?? '알 수 없는 오류 발생';
      })
      .addCase(submitLogout.pending, (state) => {
        state.isRefreshingToken = true; // 로그아웃 시도 중
      })
      .addCase(submitLogout.fulfilled, (state) => {
        state.isAuthenticated = false; // 로그아웃 성공
        state.isRefreshingToken = false;
        state.userData = null; 
        state.error = null; // 에러 초기화
      })
      .addCase(submitLogout.rejected, (state, action) => {
        state.isRefreshingToken = false;
        
        state.error = action.error.message ?? '로그아웃 중 오류 발생';
      })
      .addCase(refreshAccessToken.pending, (state) => {
        state.isRefreshingToken = true; 
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isRefreshingToken = false;
        
        state.tokenData = action.payload; // 토큰 정보를 상태에 저장
        state.error = null;
      })
      .addCase(refreshAccessToken.rejected, (state, action) => {
        state.isAuthenticated = false; // 토큰 재발급 실패
        state.isRefreshingToken = false;
        
        state.error = action.error.message ?? '토큰 재발급 중 오류 발생';
      })
    },
  });
  
  export const { setAuthenticated, setAdmin } = authSlice.actions;
  export default authSlice.reducer;