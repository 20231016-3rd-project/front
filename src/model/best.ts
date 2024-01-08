export type Best = {
  id: number;
  text: string;
  img: string;
  key: string;
};
export type Bests = {
  id: number;
  text: string;
  img: string;
  key: string;
}[];

export type Restaurant = {
  restaurantId: number;
  restaurantName: string;
  restaurantAddress: string;
  restaurantWebSite: string;
  resizedImageUrl: string;
  avgStarRate: number;
  reviewCount: number;
  likeCount: number;
};

export type Restaurants = {
  restaurantId: number;
  restaurantName: string;
  restaurantAddress: string;
  restaurantWebSite: string;
  resizedImageUrl: string;
  avgStarRate: number;
  reviewCount: number;
  likeCount: number;
}[];

export type MyRestaurant = {
  restaurantId: number;
  restaurantName: string;
  restaurantAddress: string;
  restaurantWebSite: string;
  resizeImgUrl: string;
};
export type MyRestaurants = {
  restaurantId: number;
  restaurantName: string;
  restaurantAddress: string;
  restaurantWebSite: string;
  resizeImgUrl: string;
}[];
