import {
  axiosInstance,
  axiosImgInstance,
} from './axiosInstance/axiosInstance.js';

export const getMyProfile = async () => {
  const response = await axiosInstance.get(`/sunflowerPlate/user/userprofile`);
  return response.data;
};

export const putMyProfile = async (data: any) => {
  const response = axiosImgInstance.put('/sunflowerPlate/user/', data);
  return response;
};
