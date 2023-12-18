import { axiosInstance } from "../axiosInstance/axiosInstance";

export const fetchRestaurantList = async () => {
    try {
      const response = await axiosInstance.get('/sunflowerPlate/admin/restaurant');
      return response.data;
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
      return 0; // 오류 발생 시 0을 반환
    }
  };