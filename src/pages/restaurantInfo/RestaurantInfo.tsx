import infoImg from './info-image.jpg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Map from './Map';
import Review from '../../components/Review/Review';
import StarRating from '../../components/Star/StarRating';
import WriteReviewModal from '../../components/Review/WriteReviewModal';
import { Button } from './Button';
import { getRestaurantDetail } from '../../apis/getRestaurantApi/getRestaurant';
import axios from 'axios';
import { getMyReviews } from '../../apis/reviewApi';
import { useParams } from 'react-router';

import heart from '/src/assets/images/heart.png';
import heartFill from '/src/assets/images/heartfill.png';

import EditinfoRequestModal from '../../components/Restaurant/EditInfoRequestModal';
const RestaurantInfo = () => {
  const { restaurantId } = useParams();
  console.log(typeof restaurantId);
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [isEditInfoOpen, setIsEditInfoOpen] = useState(false);
  const [info, setInfo] = useState({
    restaurantName: '',
    restaurantStarRate: 0,
    restaurantStatus: '',
    restaurantTelNum: '',
    restaurantAddress: '',
    restaurantOpenTime: '',
    restaurantBreakTime: '',
    restaurantWebSite: '',
    restaurantLikeCountDto: {
      restaurantLikeCount: 0,
      likedRestaurant: false,
    },
    restaurantMenuDtoList: [
      { restaurantMenuName: '', restaurantMenuPrice: '' },
    ],
    restaurantImageDtoList: [{ restaurantOriginUrl: '' }],
  });
  const [reviewsInfo, setReviewsInfo] = useState({
    content: [{ reviewId: null, reviewAt: '' }],
  });
  const [image, setImages] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const openWriteReviewModal = () => {
    setIsWriteReviewOpen(true);
  };
  const closeWriteReviewModal = () => {
    setIsWriteReviewOpen(false);
  };
  const openEditInfoModal = () => {
    setIsEditInfoOpen(true);
  };
  const closeEditInfoModal = () => {
    setIsEditInfoOpen(false);
  };
  useEffect(() => {
    getRestaurantDetail(restaurantId).then((data) => {
      setInfo(data);
      console.log('restaurantInfo:', data);
      setReviewsInfo(data.reviewReturnDtoPage);
      console.log('reviewsInfo:', reviewsInfo);
    });
    // getMyReviews().then((data) => setReviewArray(data));
  }, []);

  //식당 페이지로 이동 시 스크롤 위로
  useEffect(() => {
    document.getElementById('root').scrollIntoView();
  }, []);

  const getLiked = async (id: number) => {
    await getLike(id).then((res) =>
      setInfo((prevState) => {
        return {
          ...prevState,
          restaurantLikeCountDto: {
            restaurantLikeCount: res.likeCount,
            likedRestaurant: res.likeButtonClicked,
          },
        };
      })
    );
  };

  const handleLikeBtn = () => {
    getLiked(Number(restaurantId));
  };

  return (
    <>
      {isEditInfoOpen && (
        <EditinfoRequestModal
          closeModal={closeEditInfoModal}
          restaurantId={restaurantId}
        />
      )}
      {isWriteReviewOpen && (
        <WriteReviewModal
          closeModal={closeWriteReviewModal}
          setReviewsInfo={setReviewsInfo}
        />
      )}
      {isLoading && (
        <RestaurantInfoLayout className="restaurant-info">
          <div className="info__images">
            <div className="images__column">
              <img
                src={info.restaurantImageDtoList[0]?.restaurantOriginUrl}
                alt=""
                className="images__main"
              />
            </div>
            <div className="images__column">
              <img
                src={info.restaurantImageDtoList[1]?.restaurantOriginUrl}
                alt=""
              />
              <img
                src={info.restaurantImageDtoList[2]?.restaurantOriginUrl}
                alt=""
              />
            </div>
            <div className="images__column">
              <img
                src={info.restaurantImageDtoList[3]?.restaurantOriginUrl}
                alt=""
              />
              <img
                src={info.restaurantImageDtoList[4]?.restaurantOriginUrl}
                alt=""
              />
            </div>
          </div>
          <div className="info__container">
            <div className="info__title">{info.restaurantName}</div>
            <div className="info__tags">{}</div>
            <div className="info__button-container">
              <Button onClick={handleLikeBtn}>
                {!info.restaurantLikeCountDto.likedRestaurant && (
                  <LikeImg src={heart} alt="" />
                )}
                {info.restaurantLikeCountDto.likedRestaurant && (
                  <LikeImg src={heartFill} alt="" />
                )}
                좋아요({info.restaurantLikeCountDto.restaurantLikeCount})
              </Button>
              <Button>공유</Button>
              <Button onClick={openEditInfoModal}>정보 수정 요청</Button>
            </div>
            <div className="info__address">
              <div className="info__local-address">
                주소: {info.restaurantAddress}
              </div>
              <div className="info__online-address">
                인스타그램: {info.restaurantWebSite}
              </div>
              <div className="info__online-address">
                전화번호: {info.restaurantTelNum}
              </div>
            </div>
            <div className="info__business-hours">
              운영시간 {info.restaurantOpenTime}
            </div>
            <div className="info__menu">
              메뉴 정보
              <div>
                {info.restaurantMenuDtoList.map((menu, index) => {
                  return (
                    <div key={index}>
                      {menu.restaurantMenuName} {menu.restaurantMenuPrice}원
                    </div>
                  );
                })}
              </div>
            </div>
            <Map address={info.restaurantAddress} />
          </div>
          <div className="info__reviews">
            <div className="reviews__header">
              <div>방문자 리뷰</div>
              <div>
                <Button onClick={openWriteReviewModal}>리뷰작성</Button>
              </div>
            </div>
            <div className="reviews__list">
              {reviewsInfo?.content?.map((review) => {
                return (
                  <Review
                    key={`${review.reviewId}${review.reviewAt}`}
                    review={review}
                    setReviewsInfo={setReviewsInfo}
                  />
                );
              })}
            </div>
          </div>
        </RestaurantInfoLayout>
      )}
    </>
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
  font-size: 1.5rem;

  .info__images {
    display: flex;
    flex: 2 1 1;
    gap: 10px;
    width: 1080px;
    max-width: 100%;
  }

  img {
    display: block;
    width: 270px;
    max-width: 100%;
    margin-bottom: 10px;
    aspect-ratio: 10 / 12;
  }

  .images__column {
    margin: auto;
    padding: auto;
  }
  .images__main {
    width: 540px;
    aspect-ratio: 10 / 12;
  }

  .info__container {
    display: flex;
    flex-direction: column;
    width: 1200px;
    height: auto;
    margin: 1rem;
    gap: 1rem;
  }

  .info__title {
    font-size: 40px;
    font-weight: 800;
  }
  .info_tags {
    font-size: 1rem;
    color: grey;
  }
  .info__address {
    gap: 1rem;
  }

  .info__local-address {
  }
  .info__online-address {
  }
  .info__business-hours {
    width: 1200px;
    height: 100px;
    border: 2px solid black;
    margin-bottom: 10px;
    font-size: 1.5rem;
    box-sizing: border-box;
  }
  .info__menu {
    box-sizing: border-box;
    display: block;
    width: 1200px;
    border: 2px solid black;
    margin-bottom: 10px;
    gap: 1rem;
    padding: 1rem;
    div {
      margin-top: 1rem;
    }
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

const LikeImg = styled.img`
  width: 20px !important;
  height: 20px;
  box-shadow: none !important;
  &:hover {
    background: white !important;
  }
  margin-bottom: 0 !important;
`;
import { getLike } from './../../apis/restaurantLikeApi';
