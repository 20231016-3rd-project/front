import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.38.32.91',
});

interface SignUpResponse {
  message: string;
}

interface signUpData {
  email: string;
  password: string;
  nickName: string;
  phone: string;
}


// 이메일 중복 확인
export async function checkEmailDuplicate(email: string): Promise<boolean> {
  try {
    const response = await api.post('/sunflowerPlate/user/emailcheck', { email });
    return response.data === true;
  } catch (error) {
    console.error('Error during email duplicate check', error);
    throw error;
  }
}

// 닉네임 중복 확인
export async function checkNickNameDuplicate(nickName: string): Promise<boolean> {
  try {
    const response = await api.post('/sunflowerPlate/user/nickcheck', { nickName });
    return response.data === true;
  } catch (error) {
    console.error('Error during nickname duplicate check', error);
    throw error;
  }
}

// 회원가입
export async function signUpApi(userData: signUpData ): Promise<SignUpResponse> {
  try {
    const response = await api.post('/sunflowerPlate/user/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Error during signup', error);
    throw error;
  }
}