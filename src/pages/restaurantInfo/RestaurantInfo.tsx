import infoImg from './info-image.jpg';
import styled from 'styled-components';
import Map from './Map';

const RestaurantInfo = () => {
  return (
    <Wrapper className="restaurant-container">
      <ImageWrapper className="info-imagebox">
        <div className="img-column">
          <img src={infoImg} alt="" className="main-img" />
        </div>
        <div className="img-column">
          <img src={infoImg} alt="" />
          <img src={infoImg} alt="" />
        </div>
        <div className="img-column">
          <img src={infoImg} alt="" />
          <img src={infoImg} alt="" />
        </div>
      </ImageWrapper>
      <InfoBox>
        <Title>견과류가 맛있는 햄토리네</Title>
        <TagBox>홍대 | 견과류, 동결건조, 과일</TagBox>
        <ButtonBox>
          <Button>좋아요</Button>
          <Button>공유</Button>
        </ButtonBox>
        <AddressBox>
          <div>주소: 서울특별시 마포구 햄토리네 마을</div>
          <div>인스타그램: https://instagram.com</div>
        </AddressBox>
        <BusinessHoursBox>운영시간</BusinessHoursBox>
        <MenuBox>메인 메뉴</MenuBox>

        <Map />
      </InfoBox>
      <ReviewsBox>
        <ReviewsHeader>
          <div>방문자 리뷰</div>
          <div>
            <Button>리뷰작성</Button>
          </div>
        </ReviewsHeader>
      </ReviewsBox>
    </Wrapper>
  );
};

export default RestaurantInfo;
const ReviewsHeader = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;
const ReviewsBox = styled.div`
  border: 2px solid black;
  width: 1200px;
  padding: 20px;
`;
const MapBox = styled.div`
  width: 1200px;
  height: 400px;
`;

const MenuBox = styled.div`
  display: block;
  width: 1200px;
  height: 600px;
  border: 2px solid black;
  margin-bottom: 10px;
`;
const BusinessHoursBox = styled.div`
  width: 1200px;
  height: 300px;
  border: 2px solid black;
  margin-bottom: 10px;
`;
const AddressBox = styled.div``;

const InfoBox = styled.div`
  display: block;
  width: 1200px;
  height: auto;
  margin: 1rem;
`;
const ButtonBox = styled.div``;
const Button = styled.button`
  width: 300px;
  height: 100px;
  border-radius: 30px;
  margin: auto;
`;

const Title = styled.div`
  font-size: 40px;
`;

const TagBox = styled.div`
  font-size: 1rem;
  color: grey;
`;

const Wrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 8rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex: 2 1 1;
  gap: 10px;
  width: 1200px;
  max-width: 100%;
  height: 850px;

  img {
    display: block;
    width: 280px;
    max-width: 100%;
    height: 380px;
    margin-bottom: 10px;
  }

  .img-column {
    margin: auto;
    padding: auto;
  }
  .main-img {
    width: 560px;
    height: 760px;
  }
`;
