import React, { useState, useEffect } from 'react';
import OrderByButton from '../../components/Buttons/OrderByButton';
import { Restaurant, Restaurants } from '../../model/best';

import noodle from '/src/assets/images/noodle.jpg';
import ramen from '/src/assets/images/ramen.jpg';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import styled from 'styled-components';
import { searchRestaurant } from '../../apis/getRestaurantApi/getRestaurant';

const DetialPage = () => {
  const restaurantData: Restaurants = [
    {
      restaurantId: 2,
      restaurantName: '너무너무 맛있는 햄토리네 견과류',
      restaurantAddress: '서울특별시 마포구 햄토리네마을',
      restaurantWebSite: 'https://www.instagram.com',
      resizedImageUrl: noodle,
      avgStarRate: 4.2,
      reviewCount: 4,
      likeCount: 3,
    },
    {
      restaurantId: 3,
      restaurantName: '햄토리네 해바라기',
      restaurantAddress: '마포구 햄토리네마을',
      restaurantWebSite: 'https://www.instagram.com',
      resizedImageUrl: ramen,
      avgStarRate: 4.9,
      reviewCount: 5,
      likeCount: 7,
    },
  ];
  const [datas, setDatas] = useState<Restaurants>([])
  const data:Restaurants = []
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await searchRestaurant();
        console.log(response);
        let restaurants = response.content;
        for (let i = 0; i < restaurants.length; i++) {
          data.push({
            restaurantId: restaurants[i].restaurantId,
            restaurantName: restaurants[i].restaurantName,
            restaurantAddress: restaurants[i].restaurantAddress,
            restaurantWebSite: restaurants[i].restaurantWebSite,
            resizedImageUrl: restaurants[i].resizedImageUrl,
            avgStarRate: restaurants[i].avgStarRate,
            reviewCount: restaurants[i].reviewCount,
            likeCount: restaurants[i].likeCount,
          });
        }
        setDatas(data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [datas]);

  //리스트 정렬
  const [orderBy, setOrderBy] = useState('rate');
  const handleOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderBy(e.target.value);
  };
  return (
    <Section>
      <ButtonsDiv>
        <OrderByButton
          orderBy={orderBy}
          standard="rate"
          handleOrder={handleOrder}
        />
        <OrderByButton
          orderBy={orderBy}
          standard="review"
          handleOrder={handleOrder}
        />
        <OrderByButton
          orderBy={orderBy}
          standard="like"
          handleOrder={handleOrder}
        />
      </ButtonsDiv>

      <ul>
        <RestaurantCard datas={datas} />
      </ul>
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
