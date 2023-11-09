import { axiosInstance } from './axiosInstance/axiosInstance';

export const postEditInfoRequest = async (data: object) => {
  const response = await axiosInstance.post(
    `/sunflowerPlate/user/restaurant/edit`,
    data
  );
  return response.data;
};
