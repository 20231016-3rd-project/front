import { axiosInstance } from '../axiosInstance/axiosInstance.js';

export const allRestaurant = async () => {
  const response = await axiosInstance.get(`sunflowerPlate/restaurant/search`);
  return response.data.content;
};

export const getRestaurantDetail = async (id: string) => {
  const response = await axiosInstance.get(`sunflowerPlate/restaurant/${id}`);
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
        `sunflowerPlate/restaurant/search?keyword=${keyword}&page=${page}&city=${city}`
      );
    } else {
      response = await axiosInstance.get(
        `sunflowerPlate/restaurant/search?keyword=${keyword}&page=${page}&city=${city}&sort=${sort}`
      );
    }
  } else if (dong === '전체') {
    if (sort === '') {
      response = await axiosInstance.get(
        `sunflowerPlate/restaurant/search?keyword=${keyword}&page=${page}&city=${city}&district=${district}`
      );
    } else {
      response = await axiosInstance.get(
        `sunflowerPlate/restaurant/search?keyword=${keyword}&page=${page}&city=${city}&district=${district}&sort=${sort}`
      );
    }
  } else {
    if (sort === '') {
      response = await axiosInstance.get(
        `sunflowerPlate/restaurant/search?keyword=${keyword}&page=${page}&city=${city}&district=${district}&dong=${dong}`
      );
    } else {
      response = await axiosInstance.get(
        `sunflowerPlate/restaurant/search?keyword=${keyword}&page=${page}&city=${city}&district=${district}&dong=${dong}&sort=${sort}`
      );
    }
  }
  // const response = await axiosInstance.get(
  //   `sunflowerPlate/restaurant/search?keyword=${keyword}&page=${page}&city=${city}&district=${district}&dong=${dong}`
  // );
  // console.log('response', response.data);
  return response.data;
};
