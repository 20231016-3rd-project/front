import React from 'react';
import arrowRight from '/src/assets/images/arrowRight.svg';
import { Restaurants, Restaurant } from '../../model/best';
import styled from 'styled-components';

interface OwnProps {
  datas: Restaurants;
}

const RestaurantCard: React.FC<OwnProps> = ({ datas }) => {
  const renderCard = (data: Restaurant) => {
    return (
      <RestaurantList key={data.id}>
        <ListImgDiv>
          <ListImg src={data.img} alt="" />
        </ListImgDiv>
        <RestaurantInfo>
          <InfoTitle>{data.name}</InfoTitle>
          <div>
            <span>별점</span> <span>(리뷰개수)</span> <span>좋아요개수</span>
          </div>
          <br />
          <InfoAddr>{data.text2}</InfoAddr>
          <InfoAddr>{data.text3}</InfoAddr>
          <br />
          <InfoMore>
            {data.name} 더보기 <ArrowImg src={arrowRight} alt="" />
          </InfoMore>
        </RestaurantInfo>
      </RestaurantList>
    );
  };

  return <>{datas.map(renderCard)}</>;
};

export default RestaurantCard;

const RestaurantList = styled.li`
  display: flex;
  border-bottom: 1px solid black;
  padding: 2rem 0;
  margin: 0 2rem;
`;
const ListImgDiv = styled.div`
  width: 30%;
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
const InfoTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  height: auto;
`;
const InfoAddr = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
const InfoMore = styled.p`
  font-size: 20px;
  font-weight: 500;
  width: auto;
  text-align: end;
  position: absolute;
  bottom: 2rem;
  right: 0;
  cursor: pointer;
`;
const ArrowImg = styled.img`
  height: 1rem;
`;
