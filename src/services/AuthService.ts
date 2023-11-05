import axios from 'axios';

const API_URL = 'http://3.38.32.91:80';

export const signUp = async (
  email: string,
  password: string,
  nickname: string,
  phone: string
) => {
  const response = await axios.post(`${API_URL}/sunflowerPlate/user/signup`, {
    email,
    password,
    nickname,
    phone,
  });
  return response.data;
};

export const checkEmailDuplication = async (email: string) => {
  const response = await axios.post(
    `${API_URL}/sunflowerPlate/user/emailcheck`,
    {
      email,
    }
  );
  return response.data;
};

export const checkNicknameDuplication = async (nickname: string) => {
  const response = await axios.post(
    `${API_URL}/sunflowerPlate/user/nickcheck`,
    {
      nickname,
    }
  );
  return response.data;
};

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const response = await axios.post(
    `${API_URL}/sunflowerPlate/user/reissue`,
    {},
    {
      headers: {
        Cookie: `refreshToken=${refreshToken}`,
      },
    }
  );
  return response.data;
};
