import { axiosInstance } from "../axiosInstance/axiosInstance";

export const fetchReportCount = async () => {
  try {
    const response = await axiosInstance.get('/sunflowerPlate/admin/review/');
    return response.data.length;
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error);
    return 0; // 오류 발생 시 0을 반환
  }
};

export const fetchRestaurantCount = async () => {
    try {
      const response = await axiosInstance.get('/sunflowerPlate/admin/restaurant');
      return response.data.content.length;
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
      return 0; // 오류 발생 시 0을 반환
    }
  };

  export const fetchClosureCount = async () => {
    try {
      const response = await axiosInstance.get('/sunflowerPlate/admin/restaurant/edit/');
      return response.data.length;
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
      return 0; // 오류 발생 시 0을 반환
    }
  };