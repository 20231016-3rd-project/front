import { axiosInstance } from '../axiosInstance/axiosInstance';

// 응답 데이터 타입 정의
interface LoginResponse {
  accessToken: string;

}

// 에러 타입 정의
interface ApiError extends Error {
  response?: {
    data: any;
    status: number;
  };
}

// login 함수
export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post<LoginResponse>('/sunflowerPlate/user/login', { email, password });
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.headers.refreshToken);
    return response.data;
  } catch (error) {
    console.error('로그인 중 에러 발생', error as ApiError);
    throw error;
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
    localStorage.setItem('accessToken', response.data.accessToken);
    return response.data;
  } catch (error) {
    console.error('Error during token reissue', error as ApiError);
    throw error;
  }
};