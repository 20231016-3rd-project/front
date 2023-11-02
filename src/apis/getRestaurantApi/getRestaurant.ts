import { axiosInstance } from '../axiosInstance/axiosInstance.js';

export const searchRestaurant = async () => {
  const response = await axiosInstance.get(`sunflowerPlate/restaurant/search`);
  return response.data;
};

export const getProductDetail = async (id:number) => {
    const response = await axiosInstance.get(`sunflowerPlate/restaurant/${id}`);
    return response.data;
  };