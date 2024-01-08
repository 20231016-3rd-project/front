import { axiosInstance } from './axiosInstance/axiosInstance.js';

export const getLike = async (id: number) => {
  const response = await axiosInstance.get(
    `/sunflowerPlate/mypage/like?restaurantId=${id}`
  );

  return response.data;
};
