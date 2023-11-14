import { axiosInstance } from '../axiosInstance/axiosInstance';

export interface SignupRequest {
  email: string;
  password: string;
  nickname: string;
  phone: string;
}

export const signup = async (data: SignupRequest): Promise<any> => {
  const response = await axiosInstance.post('/sunflowerPlate/user/signup', data);
  return response.data;
};

export const checkEmailDuplication = async (email: string): Promise<any> => {
    const response = await axiosInstance.post('/sunflowerPlate/user/emailcheck', { email });
    return response.data;
  };
  
export const checkNicknameDuplication = async (nickname: string): Promise<any> => {
  const response = await axiosInstance.post('/sunflowerPlate/user/nickcheck', { nickname });
  return response.data;
};
