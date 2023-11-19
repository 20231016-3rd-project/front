import { axiosInstance } from '../axiosInstance/axiosInstance';

export const login = async (email: string, password: string): Promise<any> => {
  try {
    const response = await axiosInstance.post('/sunflowerPlate/user/login', { email, password });
    localStorage.setItem('accessToken', response.data.AccessToken); // 대문자 A 유지
    localStorage.setItem('refreshToken', response.headers.refreshToken);
    return response.data; // 필요하다면 여기서 특정 필드만 추출하여 반환
  } catch (error) {
    console.error('로그인 중 에러 발생', error);
    throw error;
  }
};
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
    console.error('로그아웃 중 에러 발생', error);
    throw error;
  }
};
export const reissueAccessToken = async (): Promise<any> => {
  try {
    const response = await axiosInstance.post('/sunflowerPlate/user/reissue', {}, {
      headers: {
        'X-AUTH-TOKEN': localStorage.getItem('refreshToken'),
      },
    });
    localStorage.setItem('accessToken', response.data.AccessToken);
    return response.data;
  } catch (error) {
    console.error('Error during token reissue', error);
    throw error;
  }
};