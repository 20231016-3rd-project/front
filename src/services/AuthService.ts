import { axiosInstance } from '../apis/axiosInstance/axiosInstance';

// 여기에 UserProfileUpdateRequest 인터페이스를 선언합니다.
export interface UserProfileUpdateRequest {
  nickName?: string;
  password?: string;
  phone?: string;
  profileImage?: File; // Multipart/form-data를 위한 File 타입
}

// 회원가입 요청 인터페이스
export interface SignupRequest {
  email: string;
  password: string;
  nickname: string;
  phone: string;
}

// 회원가입 함수
export const signup = async (data: SignupRequest): Promise<any> => {
  const response = await axiosInstance.post('/sunflowerPlate/user/signup', data);
  return response.data;
};

// 이메일 중복 확인 함수
export const checkEmailDuplication = async (email: string): Promise<any> => {
  const response = await axiosInstance.post(' /sunflowerPlate/user/emailcheck', { email });
  return response.data;
};

// 닉네임 중복 확인 함수
export const checkNicknameDuplication = async (nickname: string): Promise<any> => {
  const response = await axiosInstance.post('/sunflowerPlate/user/nickcheck', { nickName: nickname });
  return response.data;
};

// 회원 정보 수정 함수
export const updateUserProfile = async (
  token: string,
  data: UserProfileUpdateRequest
): Promise<any> => {
  const formData = new FormData();
  if (data.nickName) formData.append('nickName', data.nickName);
  if (data.password) formData.append('password', data.password);
  if (data.phone) formData.append('phone', data.phone);
  if (data.profileImage) formData.append('profileImage', data.profileImage);

  const response = await axiosInstance.put('/sunflowerPlate/user/userprofile', formData, {
    headers: {
      'X-AUTH-TOKEN': token,
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// 회원 탈퇴 함수
export const withdrawUser = async (token: string): Promise<any> => {
  const response = await axiosInstance.post('/sunflowerPlate/user/withdraw', {}, {
    headers: {
      'X-AUTH-TOKEN': token,
    },
  });
  return response.data;
};