import { axiosInstance } from '../axiosInstance/axiosInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';

// 응답 데이터 타입 정의
interface LoginResponse {
  memberNickName: string;
  AccessToken: string;
  accessTokenExpireDate: string; 
  issuedAt: string; 
  adminToken?: string; // 관리자 토큰
}
// 에러 타입 정의
interface ApiError 
extends Error {
 response?: {
   data: any;
   status: number;
     };
  }

// login 함수 정의
export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post<LoginResponse>('/sunflowerPlate/user/login', {
      email,
      password,
    });

    // 서버로부터 받은 refreshToken을 로컬 스토리지에 저장
    const refreshToken = response.headers['refreshToken'];
    if (refreshToken) {
      localStorage.setItem('refreshToken', refreshToken);
    }

    // 관리자 토큰이 포함된 경우, 로컬 스토리지에 저장
    const adminToken = response.data.adminToken;
    if (adminToken) {
      localStorage.setItem('adminToken', adminToken);
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

// submitLogin 함수 정의
export const submitLogin = createAsyncThunk(
  'auth/submitLogin',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await login(email, password);
      return {
        memberNickName: response.memberNickName,
        AccessToken: response.AccessToken,
        isAdmin: response.adminToken, // 서버 응답에서 isAdmin 속성을 포함시킴
        // 필요한 다른 데이터도 여기에 추가
      };
    } catch (error: any) {
      if (!error.response) throw error;
      return rejectWithValue(error.response.data);
    }
  }
);

// logout 함수
export const logout = async (): Promise<void> => {
  try {
    await axiosInstance.post('/sunflowerPlate/user/logout', {}, {
      headers: {
        'X-AUTH-TOKEN': localStorage.getItem('accessToken'),
      },
    });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  } catch (error) {
    console.error('로그아웃 중 에러 발생', error as ApiError);
    throw error;
  }
};

// reissueAccessToken 함수
export const reissueAccessToken = async (): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post<LoginResponse>('/sunflowerPlate/user/reissue', {}, {
      headers: {
        'X-AUTH-TOKEN': localStorage.getItem('refreshToken'),
      },
    });
    localStorage.setItem('accessToken', response.data.AccessToken);
    return response.data;
  } catch (error) {
    console.error('Error during token reissue', error as ApiError);
    throw error;
  }
};