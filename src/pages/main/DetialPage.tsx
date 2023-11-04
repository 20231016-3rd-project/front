import React, { useState, useEffect } from 'react';
import OrderByButton from '../../components/Buttons/OrderByButton';
import { Restaurant, Restaurants } from '../../model/best';

import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import styled from 'styled-components';

import {
  allRestaurant,
  searchRestaurant,
} from '../../apis/getRestaurantApi/getRestaurant';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerType } from '../../store/rootReducer';
import {
  getAllRestaurants,
  getSearchRestaurants,
} from '../../store/slices/restaurantSlice';
import Pagination from './../../components/Pagination/Pagination';
import { getSort } from '../../store/slices/sortSlice';

const DetialPage = () => {
  // const restaurantData: Restaurants = [
  //   {
  //     restaurantId: 2,
  //     restaurantName: '너무너무 맛있는 햄토리네 견과류',
  //     restaurantAddress: '서울특별시 마포구 햄토리네마을',
  //     restaurantWebSite: 'https://www.instagram.com',
  //     resizedImageUrl: noodle,
  //     avgStarRate: 4.2,
  //     reviewCount: 4,
  //     likeCount: 3,
  //   },
  //   {
  //     restaurantId: 3,
  //     restaurantName: '햄토리네 해바라기',
  //     restaurantAddress: '마포구 햄토리네마을',
  //     restaurantWebSite: 'https://www.instagram.com',
  //     resizedImageUrl: ramen,
  //     avgStarRate: 4.9,
  //     reviewCount: 5,
  //     likeCount: 7,
  //   },
  // ];

  const dispatch = useDispatch();

  const restaurants = useSelector(
    (state: ReducerType) => state.restaurant.restInfo
  );
  const region = useSelector((state: ReducerType) => state.region.regionInfo);
  const sort = useSelector((state: ReducerType) => state.sort.sortInfo);

  // const [datas, setDatas] = useState<Restaurants>([]);
  // const data: Restaurants = [];

  useEffect(() => {
    const getData = async () => {
      dispatch(getAllRestaurants(await allRestaurant()));
    };
    getData();
  }, []);

  useEffect(() => {
    const getSearchedDatas = async () => {
      dispatch(
        getSearchRestaurants(
          await searchRestaurant(
            '',
            1,
            region.city,
            region.district,
            region.dong,
            ''
          ).then((response) => {
            return response.content;
          })
        )
      );
    };
    getSearchedDatas();
  }, [region]);
  console.log(restaurants);
  console.log(region);

  //리스트 정렬
  const getSearchedDatas = async (sort: string) => {
    dispatch(
      getSearchRestaurants(
        await searchRestaurant(
          '',
          1,
          region.city,
          region.district,
          region.dong,
          sort
        ).then((response) => {
          return response.content;
        })
      )
    );
  };

  const handleOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getSort(e.target.value));
    getSearchedDatas(sort);
  };
  console.log(sort);
  return (
    <Section>
      <ButtonsDiv>
        <OrderByButton
          orderBy={sort}
          standard="rate"
          handleOrder={handleOrder}
        />
        <OrderByButton
          orderBy={sort}
          standard="review"
          handleOrder={handleOrder}
        />
        <OrderByButton
          orderBy={sort}
          standard="like"
          handleOrder={handleOrder}
        />
      </ButtonsDiv>

      <ul>
        <RestaurantCard datas={restaurants} />
      </ul>
      <Pagination />
    </Section>
  );
};

export default DetialPage;

const Section = styled.div`
  padding: 80px 15% 20px;
`;
const ButtonsDiv = styled.div`
  margin: 0 2rem;
`;
