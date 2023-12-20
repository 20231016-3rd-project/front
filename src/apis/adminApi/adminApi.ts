import { axiosImgInstance } from '../axiosInstance/axiosInstance'; // 올바른 경로로 변경해야 합니다.

export const registerRestaurant = async (formData: FormData) => {
  try {
    const response = await axiosImgInstance.post(
      '/sunflowerPlate/admin/restaurant/registration',
      formData,
      {}
    );
    console.log('Data successfully sent to the backend', response.data);
    return response.data;
  } catch (error) {
    console.error('There was a problem sending the form data:', error);
    throw error;
  }
};

// 가게수정부분
export const getRestaurantData = async (restaurantId: any) => {
  const response = await axiosImgInstance.get(
    `/sunflowerPlate/admin/restaurant/${restaurantId}`,
    {}
  );
  return response.data;
};

export const putRestaurantData = async (restaurantId: any, data: any) => {
  try {
    const response = await axiosImgInstance.put(
      `/sunflowerPlate/admin/restaurant/${restaurantId}`,
      data,
      {}
    );
    return response.data;
  } catch (error) {
    console.error('Update failed:', error);
    throw error;
  }
};
