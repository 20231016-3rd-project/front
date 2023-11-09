import { axiosInstance } from '../axiosInstance/axiosInstance.js';

export const allRestaurant = async () => {
  const response = await axiosInstance.get(`/sunflowerPlate/restaurant/search`);
  return response.data.content;
};

export const getRestaurantDetail = async (id: string) => {
  const response = await axiosInstance.get(`/sunflowerPlate/restaurant/${id}`);
  return response.data;
};



export const searchRestaurant = async (
  keyword: string,
  page: number,
  city: string,
  district: string,
  dong: string,
  sort: string
) => {
  let response;
  if (district === '전체') {
    if (sort === '') {
      response = await axiosInstance.get(
        `/sunflowerPlate/restaurant/search?keyword=${keyword}&page=${page}&city=${city}`
      );
    } else {
      response = await axiosInstance.get(
        `/sunflowerPlate/restaurant/search?keyword=${keyword}&page=${page}&city=${city}&sort=${sort}`
      );
    }
  } else if (dong === '전체') {
    if (sort === '') {
      response = await axiosInstance.get(
        `/sunflowerPlate/restaurant/search?keyword=${keyword}&page=${page}&city=${city}&district=${district}`
      );
    } else {
      response = await axiosInstance.get(
        `/sunflowerPlate/restaurant/search?keyword=${keyword}&page=${page}&city=${city}&district=${district}&sort=${sort}`
      );
    }
  } else {
    if (sort === '') {
      response = await axiosInstance.get(
        `/sunflowerPlate/restaurant/search?keyword=${keyword}&page=${page}&city=${city}&district=${district}&dong=${dong}`
      );
    } else {
      response = await axiosInstance.get(
        `/sunflowerPlate/restaurant/search?keyword=${keyword}&page=${page}&city=${city}&district=${district}&dong=${dong}&sort=${sort}`
      );
    }
  }
    return response.data;
};

export const bestRestaurant = async (menu:string) => {
  const response = await axiosInstance.get(`/sunflowerPlate/restaurant/best?menu=${menu}`);
  return response.data;
};
export const bestRestaurantAddr = async (address:string) => {
  const response = await axiosInstance.get(`/sunflowerPlate/restaurant/best?address=${address}`);
  return response.data;
};

export const myRestaurant = async () => {
  const response = await axiosInstance.get(`/sunflowerPlate/mypage/myplace`);
  return response.data;
};