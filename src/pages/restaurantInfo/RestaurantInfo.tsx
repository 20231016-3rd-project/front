import {
  RestaurantWrapper,
  RestaurantInfoLayout,
  LikeImg,
  ImageSection,
  InfoSection,
  InfoMenuBox,
  ButtonBox,
  InfoAddressBox,
  InfoHoursBox,
  ReviewContainer,
  ReviewsHeader,
  ReviewList,
} from './Resaurantstyle.ts';
import { useEffect, useState } from 'react';
import Map from './Map';
import Review from '../../components/Review/Review';
import WriteReviewModal from '../../components/Review/WriteReviewModal';
import { Button, InfoButton, RegistButton } from './Button';
import { getRestaurantDetail } from '../../apis/getRestaurantApi/getRestaurant';
import { useParams } from 'react-router';
import heart from '/src/assets/images/heart.png';
import heartFill from '/src/assets/images/heartfill.png';
import { getLike } from './../../apis/restaurantLikeApi';

import EditinfoRequestModal from '../../components/Restaurant/EditInfoRequestModal';
const RestaurantInfo: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId?: string }>();
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
    getRestaurantDetail(restaurantId ?? '').then((data) => {
      setInfo(data);
      console.log('restaurantInfo:', data);
      setReviewsInfo(data.reviewReturnDtoPage);
      console.log('reviewsInfo:', reviewsInfo);
    });
    // getMyReviews().then((data) => setReviewArray(data));
  }, []);

  //식당 페이지로 이동 시 스크롤 위로
  useEffect(() => {
    const rootElement: HTMLElement | null = document.getElementById('root');

    if (rootElement) {
      rootElement.scrollIntoView();
    }
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
          <RestaurantWrapper>
            <ImageSection>
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
            </ImageSection>

            <InfoSection>
              <div className="info__title">{info.restaurantName}</div>
              <div className="info__tags">{}</div>

              <ButtonBox>
                <InfoButton onClick={handleLikeBtn}>
                  {!info.restaurantLikeCountDto.likedRestaurant && (
                    <LikeImg src={heart} alt="" />
                  )}
                  {info.restaurantLikeCountDto.likedRestaurant && (
                    <LikeImg src={heartFill} alt="" />
                  )}
                  좋아요({info.restaurantLikeCountDto.restaurantLikeCount})
                </InfoButton>
                <InfoButton>공유</InfoButton>
                <InfoButton onClick={openEditInfoModal}>
                  정보 수정 요청
                </InfoButton>
              </ButtonBox>

              <InfoAddressBox>
                <div className="info__local-address">
                  주소: {info.restaurantAddress}
                </div>
                <div className="info__online-address">
                  웹사이트:{' '}
                  <a href="{info.restaurantWebSite}">
                    {info.restaurantWebSite}
                  </a>
                </div>
                <div className="info__online-address">
                  전화번호: {info.restaurantTelNum}
                </div>
              </InfoAddressBox>

              <InfoHoursBox>
                <h1>영업시간</h1>
                <p>평일: {info.restaurantOpenTime}</p>
                <p>주말: {info.restaurantOpenTime}</p>
              </InfoHoursBox>

              <InfoMenuBox>
                <h1>메뉴 정보</h1>

                <div className="menu_map">
                  {info.restaurantMenuDtoList.map((menu, index) => {
                    return (
                      <div key={index}>
                        <span className="menu_name">
                          {menu.restaurantMenuName} -----{' '}
                        </span>
                        <span className="menu_price">
                          {menu.restaurantMenuPrice}원
                        </span>
                      </div>
                    );
                  })}
                </div>
              </InfoMenuBox>

              <Map address={info.restaurantAddress} />
            </InfoSection>

            <ReviewContainer>
              <ReviewsHeader>
                <h1>방문자 리뷰</h1>
                <div>
                  <RegistButton onClick={openWriteReviewModal}>
                    리뷰작성
                  </RegistButton>
                </div>
              </ReviewsHeader>

              <ReviewList>
                {reviewsInfo?.content?.map((review) => {
                  return (
                    <Review
                      key={review.reviewId}
                      review={review}
                      setReviewsInfo={setReviewsInfo}
                    />
                  );
                })}
              </ReviewList>
            </ReviewContainer>
          </RestaurantWrapper>
        </RestaurantInfoLayout>
      )}
    </>
  );
};

export default RestaurantInfo;
