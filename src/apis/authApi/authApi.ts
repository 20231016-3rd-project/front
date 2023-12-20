import { axiosInstance } from '../axiosInstance/axiosInstance';
import axios from 'axios';

function isTokenExpired(): boolean {
  const expireDate = localStorage.getItem('tokenExpireDate');
  if (!expireDate) return true;
  
  return new Date() > new Date(expireDate);
}
interface LoginResponse {
  memberNickName: string;
  accessToken: string;
  accessTokenExpireDate: string; 
  issuedAt: string; 
}

interface ApiError extends Error {
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

    const { accessToken } = response.data;

    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }

 
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw { message: error.message, status: error.response?.status };
    } else {

      throw { message: '알 수 없는 오류 발생', status: null };
    }
  }
};


// logout 함수
export const logout = async (): Promise<void> => {
  try {
    await axiosInstance.post('/sunflowerPlate/user/logout', {}, {
      headers: {
        'X-AUTH-TOKEN': localStorage.getItem('accessToken'),
      },
    });
    localStorage.removeItem('accessToken'); 
  } catch (error) {
    console.error('로그아웃 중 에러 발생', error as ApiError);
    throw error;
  }
};

// reissueAccessToken 함수
export const reissueAccessToken = async (): Promise<LoginResponse> => {
  try {
    if (isTokenExpired()) {
      
      const response = await axiosInstance.post<LoginResponse>(
        '/sunflowerPlate/user/reissue',
        {},
        {
          headers: {
            'X-AUTH-TOKEN': localStorage.getItem('accessToken'),
          },
        }
      );

      const { accessToken } = response.data;

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
      }

      return response.data;
    } else {
      
      const currentAccessToken = localStorage.getItem('accessToken');
      if (currentAccessToken === null) {
        throw new Error("No access token found");
      }
      return {
        accessToken: currentAccessToken,
        memberNickName: 'DefaultNickName', 
        accessTokenExpireDate: 'DefaultExpireDate', 
        issuedAt: 'DefaultIssuedAt', 
      };
    }
  } catch (error) {
    console.error('Error during token reissue', error as ApiError);
    throw error;
  }
};