import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, reissueAccessToken } from '../../apis/authApi/authApi';
import { RootState } from '../../store/store';


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



// 관리자 권한 확인을 위한 API 호출 함수
// const checkAdminPrivilege = async () => {
//   try {
//     // 관리자 전용 API 호출 (실제 API 경로로 변경 필요)
//     await axiosInstance.get('/sunflowerPlate/sunflowerPlate/admin');
//     return true; // 관리자 권한이 있다고 간주
//   } catch (error) {
//     return false; // 관리자 권한이 없다고 간주
//   }
// };

export const submitLogin = createAsyncThunk(
  'auth/submitLogin',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await login(email, password);
      
      return {
        nickname: response.data.memberNickName,
        tokenData: {
          accessToken: response.data.accessToken,
          expiresIn: calculateExpiresIn(response.data.accessTokenExpireDate),
          accessTokenExpireDate: response.data.accessTokenExpireDate,
          issuedAt: response.data.issuedAt,
        },
      };
    } catch (error: any) {
      if (!error.response) throw error;
      return rejectWithValue(error.response.data);
    }
  }
)

export const submitLogout = createAsyncThunk<void, void, { state: RootState }>(
  'auth/submitLogout',
  async (_, { rejectWithValue }) => {
    try {
      await logout();
      localStorage.clear();
    } catch (error: any) {
      if (!error.response) throw error;
      return rejectWithValue(error.response.data);
    }
  }
);
export const refreshAccessToken = createAsyncThunk(
  'auth/refreshAccessToken',
  async (_, { rejectWithValue }) => {
    try {
      const response = await reissueAccessToken();
      const { accessToken, accessTokenExpireDate, issuedAt } = response.data;
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
        nickname: action.payload.nickname, // 닉네임 저장
        phone: '' 
      }; 
      state.tokenData = action.payload.tokenData;
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