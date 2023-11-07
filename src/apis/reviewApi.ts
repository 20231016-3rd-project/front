import {
  axiosInstance,
  axiosImgInstance,
} from './axiosInstance/axiosInstance.js';
// export const searchRestaurant = async () => {
//   const response = await axiosInstance.get(`sunflowerPlate/restaurant/search`);
//   return response.data;
// };

// export const getRestaurantDetail = async (id: number) => {
//   const response = await axiosInstance.get(`sunflowerPlate/restaurant/${id}`);
//   return response.data;
// };

export const getMyReviews = async () => {
  const response = await axiosInstance.get(`/sunflowerPlate/mypage/myreview`);
  return response.data;
};

export const postReview = async (restaurantId: string, formdata: object) => {
  const response = await axiosImgInstance.post(
    `/sunflowerPlate/user/review/new?restaurantId=${restaurantId}`,
    formdata
  );
  return response.data;
};

// {
//   "reviewId":43,
// "reportCategory":"닉네임",
// "reportContent":"닉네임이 부적절합니다"
// }

export const reportReview = async (body) => {
  const response = await axiosInstance.post(
    `/sunflowerPlate/user/report`,
    body
  );
  return response;
};

export const putReview = async (reviewId, formdata) => {
  const response = await axiosImgInstance.put(
    `/sunflowerPlate/mypage/myreview?reviewId=${reviewId}`,
    formdata
  );
  return response;
};
