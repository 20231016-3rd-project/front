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
import { getRestaurantDetailQuery } from '../../hooks/reviewQuery.ts';
const RestaurantInfo: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const { data, isLoading } = getRestaurantDetailQuery(restaurantId ?? '');
  console.log('리스폰스', isLoading);
  console.log('리스폰스', data);
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [isEditInfoOpen, setIsEditInfoOpen] = useState(false);
  // const [info, setInfo] = useState({
  //   restaurantName: '',
  //   restaurantStarRate: 0,
  //   restaurantStatus: '',
  //   restaurantTelNum: '',
  //   restaurantAddress: '',
  //   restaurantOpenTime: '',
  //   restaurantBreakTime: '',
  //   restaurantWebSite: '',
  //   restaurantLikeCountDto: {
  //     restaurantLikeCount: 0,
  //     likedRestaurant: false,
  //   },
  //   restaurantMenuDtoList: [
  //     { restaurantMenuName: '', restaurantMenuPrice: '' },
  //   ],
  //   restaurantImageDtoList: [{ restaurantOriginUrl: '' }],
  // });
  const reviewsInfo = data?.reviewReturnDtoPage;
  const [image, setImages] = useState('');
  // const [isLoading, setIsLoading] = useState(true);

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

  //식당 페이지로 이동 시 스크롤 위로
  useEffect(() => {
    const rootElement: HTMLElement | null = document.getElementById('root');

    if (rootElement) {
      rootElement.scrollIntoView();
    }
  }, []);

  const getLiked = async (id: number) => {
    await getLike(id).then((res) => {
      data['restaurantLikeCount'] = res.likeCount;
      data['likedRestaurant'] = res.likeButtonClicked;
      return data;
    });
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
        <WriteReviewModal closeModal={closeWriteReviewModal} />
      )}
      {!isLoading && (
        <RestaurantInfoLayout>
          <RestaurantWrapper>
            <ImageSection>
              <div className="images__column">
                <img
                  src={data.restaurantImageDtoList[0]?.restaurantOriginUrl}
                  alt=""
                  className="images__main"
                />
              </div>
              <div className="images__column">
                <img
                  src={data.restaurantImageDtoList[1]?.restaurantOriginUrl}
                  alt=""
                />
                <img
                  src={data.restaurantImageDtoList[2]?.restaurantOriginUrl}
                  alt=""
                />
              </div>
              <div className="images__column">
                <img
                  src={data.restaurantImageDtoList[3]?.restaurantOriginUrl}
                  alt=""
                />
                <img
                  src={data.restaurantImageDtoList[4]?.restaurantOriginUrl}
                  alt=""
                />
              </div>
            </ImageSection>

            <InfoSection>
              <div className="info__title">{data.restaurantName}</div>
              <div className="info__tags">{}</div>

              <ButtonBox>
                <InfoButton onClick={handleLikeBtn}>
                  {!data.restaurantLikeCountDto.likedRestaurant && (
                    <LikeImg src={heart} alt="" />
                  )}
                  {data.restaurantLikeCountDto.likedRestaurant && (
                    <LikeImg src={heartFill} alt="" />
                  )}
                  좋아요({data.restaurantLikeCountDto.restaurantLikeCount})
                </InfoButton>
                <InfoButton>공유</InfoButton>
                <InfoButton onClick={openEditInfoModal}>
                  정보 수정 요청
                </InfoButton>
              </ButtonBox>

              <InfoAddressBox>
                <div className="info__local-address">
                  주소: {data.restaurantAddress}
                </div>
                <div className="info__online-address">
                  웹사이트:{' '}
                  <a href={data.restaurantWebSite}>{data.restaurantWebSite}</a>
                </div>
                <div className="info__online-address">
                  전화번호: {data.restaurantTelNum}
                </div>
              </InfoAddressBox>

              <InfoHoursBox>
                <h1>영업시간</h1>
                <p>평일: {data.restaurantOpenTime}</p>
                <p>주말: {data.restaurantOpenTime}</p>
              </InfoHoursBox>

              <InfoMenuBox>
                <h1>메뉴 정보</h1>

                <div className="menu_map">
                  {data.restaurantMenuDtoList.map((menu, index) => {
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

              <Map address={data.restaurantAddress} />
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
                  return <Review key={review.reviewId} review={review} />;
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
