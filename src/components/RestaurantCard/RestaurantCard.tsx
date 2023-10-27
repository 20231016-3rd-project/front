import React from 'react';
import arrowRight from '/src/assets/images/arrowRight.svg';
import { Restaurant } from '../../model/best';

interface OwnProps {
  datas: Restaurant;
}

const RestaurantCard: React.FC<OwnProps> = ({ datas }) => {
  const renderCard = (data) => {
    return (
      <li className="sub-list" key={data.id}>
        <div className="list-img-div">
          <img className="list-img" src={data.img} alt="" />
        </div>
        <div className="list-text">
          <p className="title">{data.name}</p>
          <div>
            <span>별점</span> <span>(리뷰개수)</span> <span>좋아요개수</span>
          </div>
          <br />
          <p className="addr">{data.text2}</p>
          <p className="addr">{data.text3}</p>
          <br />
          <p className="more">
            {data.name} 더보기{' '}
            <img className="see-more-arrow" src={arrowRight} alt="" />
          </p>
        </div>
      </li>
    );
  };

  return <>{datas.map(renderCard)}</>;
};

export default RestaurantCard;
