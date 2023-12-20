import React from 'react';
import arrowRight from '/src/assets/images/arrowRight.svg';
import heartFill from '/src/assets/images/heartfill.png';
import star from '/src/assets/images/star.png';
import { Restaurants, Restaurant } from '../../model/best';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface OwnProps {
  data: Restaurants;
}

const RestaurantCard: React.FC<OwnProps> = ({ data }) => {

  const renderCard = (data: Restaurant) => {
    return (
      <RestaurantList key={data.restaurantId}>
        <ListImgDiv to={`/restaurant/${data.restaurantId}`}>
          <ListImg src={data.resizedImageUrl} alt="" />
        </ListImgDiv>
        <RestaurantInfo>
          <InfoTitle to={`/restaurant/${data.restaurantId}`}>
            {data.restaurantName}
          </InfoTitle>
          <RateInfo>
            <Rate>
              <RateInfoImg src={star} alt="" /> {data.avgStarRate} (
              {data.reviewCount})
            </Rate>
            <Bar />
            <LikeButton>
              <RateInfoImg src={heartFill} alt="" />
              {data.likeCount}
            </LikeButton>
          </RateInfo>
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

  return <RenderList>{data.map(renderCard)}</RenderList>;
};

export default RestaurantCard;

const RestaurantList = styled.li`
  display: flex;
  border-bottom: 1px solid black;
  padding: 2rem 0;
  margin: 0 2rem;
`;
const ListImgDiv = styled(Link)`
  min-width: 260px;
  max-width: 260px;
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  position: absolute;
  bottom: 2rem;
  right: 0;
  cursor: pointer;

  &:visited,
  &:link {
    text-decoration: none;
    color: darkblue;
  }
`;
const ArrowImg = styled.img`
width: 20px;
height: 20px;
margin-left: 10px;
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
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
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
const RenderList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

