import { axiosInstance } from '../axiosInstance/axiosInstance';
import axios from 'axios';

function isTokenExpired(): boolean {
  const expireDate = localStorage.getItem('tokenExpireDate');
  if (!expireDate) return true;
  
  return new Date() > new Date(expireDate);
}

// 응답 데이터 타입 정의
interface LoginResponse {
  memberNickName: string;
  accessToken: string;
  accessTokenExpireDate: string; 
  issuedAt: string; 
}

// 에러 타입 정의
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
      // 그 외 예외 처리
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
    // 토큰이 만료되었다면 새로운 토큰을 요청
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
      // 토큰이 만료되지 않았다면 기존의 토큰 정보를 반환
      return {
        accessToken: localStorage.getItem('accessToken'),
        // 기타 필요한 정보를 여기에 추가하시면 됩니다.
      };
    }
  } catch (error) {
    console.error('Error during token reissue', error as ApiError);
    throw error;
  }
};
