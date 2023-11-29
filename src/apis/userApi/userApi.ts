import { axiosInstance } from '../axiosInstance/axiosInstance';

// 회원가입 요청 데이터 타입 정의
export interface SignupRequest {
  email: string;
  password: string;
  nickname: string;
  phone: string;
}

// 회원가입 함수
export const signup = async (data: SignupRequest): Promise<any> => {
  try {
    const response = await axiosInstance.post('/sunflowerPlate/user/signup', data);
    return response.data;

  } catch (error) {
    console.error('회원가입 중 에러 발생', error);
    throw error;
  }
};

// 이메일 중복 검사 함수
export const checkEmailDuplication = async (email: string): Promise<any> => {
  try {
    const response = await axiosInstance.post('/sunflowerPlate/user/emailcheck', { email });
    return response.data;

  } catch (error) {
    console.error('이메일 중복 확인 중 에러 발생', error);
    throw error;
  }
};

// 닉네임 중복 검사 함수
export const checkNicknameDuplication = async (nickname: string): Promise<any> => {
  try {
    const response = await axiosInstance.post('/sunflowerPlate/user/nickcheck', { nickname });
    return response.data;

  } catch (error) {
    console.error('닉네임 중복 확인 중 에러 발생', error);
    throw error;
  }
};

// 사용자 프로필 업데이트 함수
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

// 회원정보 요청 함수
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