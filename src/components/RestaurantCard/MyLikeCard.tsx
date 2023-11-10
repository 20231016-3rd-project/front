import React, { useEffect, useState } from 'react';
import arrowRight from '/src/assets/images/arrowRight.svg';
import heartFill from '/src/assets/images/heartfill.png';
import star from '/src/assets/images/star.png';
import {
  Restaurants,
  Restaurant,
  MyRestaurants,
  MyRestaurant,
} from '../../model/best';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface OwnProps {
  datas: MyRestaurants;
}

const MyLikeCard: React.FC<OwnProps> = ({ datas }) => {
  const renderCard = (data: MyRestaurant) => {
    return (
      <RestaurantList key={data.restaurantId}>
        <ListImgDiv to={`/restaurant/${data.restaurantId}`}>
          <ListImg src={data.resizeImgUrl} alt="" />
        </ListImgDiv>
        <RestaurantInfo>
          <InfoTitle to={`/restaurant/${data.restaurantId}`}>
            {data.restaurantName}
          </InfoTitle>
          <br />
          <br />
          <br />
          <InfoAddr>{data.restaurantAddress}</InfoAddr>
          <InfoAddr>{data.restaurantWebSite}</InfoAddr>
          <br />
          <InfoMore to={`/restaurant/${data.restaurantId}`}>
            {data.restaurantName} 더보기 <ArrowImg src={arrowRight} alt="" />
          </InfoMore>
        </RestaurantInfo>
      </RestaurantList>
    );
  };

  return <>{datas.map(renderCard)}</>;
};

export default MyLikeCard;

const RestaurantList = styled.li`
  display: flex;
  border-bottom: 1px solid black;
  padding: 2rem 0;
  margin: 0 2rem;
`;
const ListImgDiv = styled(Link)`
  width: 260px;
  height: 260px;
  cursor: pointer;
`;
const ListImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const RestaurantInfo = styled.div`
  padding: 2rem 0 2rem 3rem;
  width: 70%;
  line-height: 25px;
  position: relative;
`;
const InfoTitle = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  height: auto;
  cursor: pointer;

  &:visited,
  &:link {
    text-decoration: none;
    color: black;
  }
`;
const InfoAddr = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
const InfoMore = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  width: auto;
  text-align: end;
  position: absolute;
  bottom: 2rem;
  right: 0;
  cursor: pointer;

  &:visited,
  &:link {
    text-decoration: none;
    color: black;
  }
`;
const ArrowImg = styled.img`
  height: 1rem;
`;

const RateInfo = styled.div`
  display: flex;
  align-items: center;
`;
const Rate = styled.div`
  display: flex;
  align-items: center;
`;
const RateInfoImg = styled.img`
  width: 1rem;
  margin-right: 0.2rem;
`;
const Bar = styled.div`
  border-right: 1px solid #666666;
  margin-left: 0.5rem;
  height: 0.8rem;
`;
const LikeButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
