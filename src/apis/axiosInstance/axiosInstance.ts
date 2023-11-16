import axios from 'axios';

const createInstance = (contentType:string) => {
  const config = {
    baseURL: import.meta.env.VITE_APP_SERVER_API,
    timeout: 3000,
    headers: {
      'Content-Type': contentType,
    },
  };
  const instance = axios.create(config);

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken');

      if (token) config.headers['X-AUTH-TOKEN'] = `${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // instance.interceptors.response.use(
  //   (response) => {
  //     const { accessToken, refreshToken, accessTokenExpireDate } =
  //       response.data;

  //     if (accessToken && accessTokenExpireDate) {
  //       const date = new Date(accessTokenExpireDate);
  //       const expires = date.toUTCString();
  //       setCookie('accessToken', accessToken, expires);
  //     }

  //     const expires = new Date();
  //     expires.setDate(expires.getDate() + 7);
  //     const expiresStr = expires.toUTCString();

  //     if (refreshToken && expiresStr) {
  //       setCookie('refreshToken', refreshToken, expiresStr);
  //     }
  //     return response;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );
  return instance;
};
export const axiosInstance = createInstance('application/json');
export const axiosImgInstance = createInstance('multipart/form-data');
