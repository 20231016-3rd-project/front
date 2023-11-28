import { axiosInstance } from '../axiosInstance/axiosInstance';

export interface SignupRequest {
  email: string;
  password: string;
  nickname: string;
  phone: string;
}

export const signup = async (data: SignupRequest): Promise<any> => {
  try {
    const response = await axiosInstance.post('/sunflowerPlate/user/signup', data);
    return response.data;
  } catch (error) {
    console.error('회원가입 중 에러 발생', error);
    throw error;
  }
};

export const checkEmailDuplication = async (email: string): Promise<any> => {
  try {
    const response = await axiosInstance.post('/sunflowerPlate/user/emailcheck', { email });
    return response.data;
  } catch (error) {
    console.error('이메일 중복 확인 중 에러 발생', error);
    throw error;
  }
};

export const checkNicknameDuplication = async (nickname: string): Promise<any> => {
  try {
    const response = await axiosInstance.post('/sunflowerPlate/user/nickcheck', { nickname });
    return response.data;
  } catch (error) {
    console.error('닉네임 중복 확인 중 에러 발생', error);
    throw error;
  }
};
export const updateUserProfile = async (data: UserProfileUpdateRequest): Promise<any> => {
  try {
    const response = await axiosInstance.put('/sunflowerPlate/user/userprofile', data, {
      headers: {
        'X-AUTH-TOKEN': localStorage.getItem('accessToken'),
      },
    });
    return response.data;
  } catch (error) {
    console.error('회원정보 수정 중 에러 발생', error);
    throw error;
  }
};
// 회원정보 요청 (GET 요청으로 변경)
export const fetchUserProfile = async (): Promise<any> => {
  try {
    const response = await axiosInstance.get('/sunflowerPlate/user/userprofile', {
      headers: {
        'X-AUTH-TOKEN': localStorage.getItem('accessToken'), // 액세스 토큰 포함
      },
    });
    return response.data; // 회원 정보 데이터 반환
  } catch (error) {
    console.error('회원정보 요청 중 에러 발생', error);
    throw error;
  }
};