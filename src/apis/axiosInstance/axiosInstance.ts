import axios from 'axios';

const createInstance = (contentType) => {
  const config = {
    baseURL: 'http://3.38.32.91',
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
  
  return instance;
};
export const axiosInstance = createInstance('application/json');
export const axiosImgInstance = createInstance('multipart/form-data');
