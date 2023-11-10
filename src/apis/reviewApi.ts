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

export const reportReview = async (body:any) => {
  const response = await axiosInstance.post(
    `/sunflowerPlate/user/report`,
    body
  );
  return response;
};

export const putReview = async (reviewId:number, formdata:FormData) => {
  const response = await axiosImgInstance.put(
    `/sunflowerPlate/mypage/myreview?reviewId=${reviewId}`,
    formdata
  );
  return response.data;
};

export const likeReview = async (reviewId:number) => {
  const response = await axiosInstance.post(
    `/sunflowerPlate/user/${reviewId}/like`
  );
  return response.data;
};
// response.data
// {
//   "좋아요": true,
//   "좋아요 개수": 1
// }

export const deleteReview = async (reviewId:number) => {
  const response = await axiosInstance.delete(
    `/sunflowerPlate/mypage/myreview?reviewId=${reviewId}`
  );
  return response;
};
