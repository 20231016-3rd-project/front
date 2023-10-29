import React, { useState } from 'react';
import OrderByButton from '../../components/Buttons/OrderByButton';
import { Restaurants } from '../../model/best';

import noodle from '/src/assets/images/noodle.jpg';
import ramen from '/src/assets/images/ramen.jpg';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import styled from 'styled-components';

const DetialPage = () => {
  const retaurantData: Restaurants = [
    {
      id: 1,
      name: '너무너무 맛있는 햄토리네 견과류',
      text1: '홍대! 견과류, 동결건조 과일',
      text2: '서울특별시 마포구 햄토리네마을',
      text3: 'https://www.instagram.com',
      img: noodle,
    },
    {
      id: 2,
      name: '햄토리네 해바라기',
      text1: '햄햄',
      text2: '마포구 햄토리네마을',
      text3: 'https://www.instagram.com',
      img: ramen,
    },
  ];

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
        <RestaurantCard datas={retaurantData} />
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
