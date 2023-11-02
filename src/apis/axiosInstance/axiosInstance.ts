import axios from 'axios';
import { getCookie, setCookie } from '../../utils/cookie';

const createInstance = (contentType) => {
  const config = {
    baseURL: import.meta.env.VITE_SERVER_API,
    timeout: 3000,
    headers: {
      'Content-Type': contentType,
    },
  };
  const instance = axios.create(config);

  instance.interceptors.request.use(
    (config) => {
      const token = getCookie('accessToken');

      if (token) config.headers['X-AUTH-TOKEN'] = `${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      const { accessToken, refreshToken, accessTokenExpireDate } =
        response.data;

      if (accessToken && accessTokenExpireDate) {
        const date = new Date(accessTokenExpireDate);
        const expires = date.toUTCString();
        setCookie('accessToken', accessToken, expires);
      }

      const expires = new Date();
      expires.setDate(expires.getDate() + 7);
      const expiresStr = expires.toUTCString();

      if (refreshToken && expiresStr) {
        setCookie('refreshToken', refreshToken, expiresStr);
      }
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return instance;
};
export const axiosInstance = createInstance('application/json');
export const axiosImgInstance = createInstance('multipart/form-data');
