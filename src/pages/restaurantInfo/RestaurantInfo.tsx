import infoImg from './info-image.jpg';
import styled from 'styled-components';
import Map from './Map';
import Review from './Review';
import StarRating from './StarRating';
import { Button } from './Button';
const RestaurantInfo = () => {
  return (
    <RestaurantInfoLayout className="restaurant-info">
      <div className="info__images">
        <div className="images__column">
          <img src={infoImg} alt="" className="images__main" />
        </div>
        <div className="images__column">
          <img src={infoImg} alt="" />
          <img src={infoImg} alt="" />
        </div>
        <div className="images__column">
          <img src={infoImg} alt="" />
          <img src={infoImg} alt="" />
        </div>
      </div>
      <div className="info__container">
        <div className="info__title">견과류가 맛있는 햄토리네</div>
        <div className="info__tags">홍대 | 견과류, 동결건조, 과일</div>
        <div className="info__button-container">
          <Button>좋아요</Button>
          <Button>공유</Button>
        </div>
        <div className="info__address">
          <div className="info__local-address">
            주소: 서울특별시 마포구 햄토리네 마을
          </div>
          <div className="info__online-address">
            인스타그램: https://instagram.com
          </div>
        </div>
        <div className="info__business-hours">
          운영시간
          <br />
          평일: 10:00 ~ 21: 00
          <br />
          주말: 10:00 ~ 20:00
          <br />
          브레이크타임: 16:00 ~ 17:00
        </div>
        <div className="info__menu">메인 메뉴</div>
        <Map />
      </div>
      <div className="info__reviews">
        <div className="reviews__header">
          <div>방문자 리뷰</div>
          <div>
            <Button>리뷰작성</Button>
          </div>
        </div>
        <div className="reviews__list">
          <Review />
          <Review />
        </div>
      </div>
      <StarRating />
    </RestaurantInfoLayout>
  );
};

export default RestaurantInfo;

// const Button = styled.button`
//   width: 300px;
//   height: 100px;
//   border-radius: 30px;
//   margin: auto;
// `;

const RestaurantInfoLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 8rem;

  .info__images {
    display: flex;
    flex: 2 1 1;
    gap: 10px;
    width: 1200px;
    max-width: 100%;
    height: 850px;
  }

  img {
    display: block;
    width: 280px;
    max-width: 100%;
    height: 380px;
    margin-bottom: 10px;
  }

  .images__column {
    margin: auto;
    padding: auto;
  }
  .images__main {
    width: 560px;
    height: 760px;
  }

  .info__container {
    display: block;
    width: 1200px;
    height: auto;
    margin: 1rem;
  }

  .info__title {
    font-size: 40px;
  }
  .info_tags {
    font-size: 1rem;
    color: grey;
  }
  .info__address {
  }

  .info__local-address {
  }
  .info__online-address {
  }
  .info__business-hours {
    width: 1200px;
    height: 300px;
    border: 2px solid black;
    margin-bottom: 10px;
    font-size: 2rem;
    font-weight: 600;
  }
  .info__menu {
    display: block;
    width: 1200px;
    height: 600px;
    border: 2px solid black;
    margin-bottom: 10px;
  }

  .info__reviews {
    border: 2px solid black;
    width: 1200px;
    padding: 20px;
  }
  .reviews__header {
    width: 1200px;
    display: flex;
    justify-content: space-between;
  }
`;
