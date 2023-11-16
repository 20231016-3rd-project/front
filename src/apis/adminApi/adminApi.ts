import { axiosInstance, axiosImgInstance } from "../axiosInstance/axiosInstance" // 올바른 경로로 변경해야 합니다.
import axios from 'axios';

const accessToken = localStorage.getItem('accessToken');

export const API = axios.create({
  baseURL: 'http://3.38.32.91/sunflowerPlate/admin',
  headers: {
    "X-AUTH-TOKEN": accessToken,
    'Content-Type': 'multipart/form-data'
  },
});

export const registerRestaurant = async ( formData:FormData) => {
  try {
    const response = await axiosImgInstance.post('/sunflowerPlate/admin/restaurant/registration', formData, {
    });
    console.log('Data successfully sent to the backend', response.data);
    return response.data;
  } catch (error) {
    console.error('There was a problem sending the form data:', error);
    throw error;
  }
};

// 가게수정부분
export const getRestaurantData = async ( restaurantId:number) => {
  const response = await axiosInstance.get(`/sunflowerPlate/admin/restaurant/${restaurantId}`, {
  });
  return response.data;
};


