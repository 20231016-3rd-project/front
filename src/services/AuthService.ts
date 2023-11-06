// AuthService.ts

import { axiosInstance } from '../apis/axiosInstance/axiosInstance';

export interface SignupRequest {
  email: string;
  password: string;
  nickname: string;
  phone: string;
}

// 회원가입 요청 함수
export const signup = async (data: SignupRequest): Promise<any> => {
  const response = await axiosInstance.post('/signup', data);
  return response.data;
};

// 이메일 중복 확인 함수
export const checkEmailDuplication = async (email: string): Promise<any> => {
  const response = await axiosInstance.post('/emailcheck', { email });
  return response.data;
};

// 닉네임 중복 확인 함수
export const checkNicknameDuplication = async (nickname: string): Promise<any> => {
  const response = await axiosInstance.post('/nickcheck', { nickname });
  return response.data;
};
