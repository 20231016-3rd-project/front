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
  LeftContainer,
  RightContainer,
  InfoBottomBox,
  MenuHourBox,
  InfoHeader,
  Divider,
} from './Resaurantstyle.ts';
import { useEffect, useState } from 'react';
import Map from './Map';
import Review from '../../components/Review/Review';
import WriteReviewModal from '../../components/Review/WriteReviewModal';
// import { getRestaurantDetail } from '../../apis/getRestaurantApi/getRestaurant';
import { useParams } from 'react-router';
import heart from '../../assets/images/heart.png';
import heartFill from '../../assets/images/heartfill.png';
import { getLike } from './../../apis/restaurantLikeApi';
import { FaShareNodes } from 'react-icons/fa6';

import EditinfoRequestModal from '../../components/Restaurant/EditInfoRequestModal';
import { getRestaurantDetailQuery } from '../../hooks/reviewQuery.ts';
import { StackDivider, Button } from '@chakra-ui/react';
import ShareButton from './ShareButton.tsx';
import { darken } from 'polished';
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
            <LeftContainer>
              {data.restaurantImageDtoList.length === 5 ? (
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
              ) : (
                <ImageSection>
                  <div className="images__view">
                    {data.restaurantImageDtoList.map((image: any) => (
                      <img src={image.restaurantOriginUrl} />
                    ))}
                  </div>
                </ImageSection>
              )}
              <InfoSection>
                <InfoHeader>
                  <div className="info__title">{data.restaurantName}</div>
                  <ButtonBox>
                    <Button
                      color={'black'}
                      onClick={handleLikeBtn}
                      borderRadius={'full'}
                    >
                      {!data.restaurantLikeCountDto.likedRestaurant && (
                        <LikeImg src={heart} alt="" />
                      )}
                      {data.restaurantLikeCountDto.likedRestaurant && (
                        <LikeImg src={heartFill} alt="" />
                      )}
                      ({data.restaurantLikeCountDto.restaurantLikeCount})
                    </Button>

                    <ShareButton />

                    <Button onClick={openEditInfoModal}>정보 수정 요청</Button>
                  </ButtonBox>
                </InfoHeader>
                <Divider />
                <InfoAddressBox>
                  <div className="info__local-address">
                    주소: {data.restaurantAddress}
                  </div>
                  <div className="info__online-address">
                    웹사이트:{' '}
                    <a href={data.restaurantWebSite}>
                      {data.restaurantWebSite}
                    </a>
                  </div>
                  <div className="info__online-address">
                    전화번호: {data.restaurantTelNum}
                  </div>
                </InfoAddressBox>
                <Divider />

                <InfoBottomBox>
                  <MenuHourBox>
                    <InfoHoursBox>
                      <h1>영업시간</h1>
                      <p>평일: {data.restaurantOpenTime}</p>
                      <p>주말: {data.restaurantOpenTime}</p>
                    </InfoHoursBox>
                    <Divider />
                    <InfoMenuBox>
                      <h1>메뉴 정보</h1>
                      <div className="menu_map">
                        {data.restaurantMenuDtoList.map(
                          (menu: any, index: any) => {
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
                          }
                        )}
                      </div>
                    </InfoMenuBox>
                  </MenuHourBox>
                  <Map address={data.restaurantAddress} />
                </InfoBottomBox>
              </InfoSection>
            </LeftContainer>
            <RightContainer>
              <ReviewContainer>
                <ReviewsHeader>
                  <h1>방문자 리뷰</h1>
                  <div>
                    <Button
                      variant={'solid'}
                      onClick={openWriteReviewModal}
                      colorScheme="#f9b916;"
                    >
                      리뷰작성
                    </Button>
                  </div>
                </ReviewsHeader>

                <ReviewList>
                  {reviewsInfo?.content?.map((review: any) => {
                    return (
                      <Review
                        key={`${review.reviewId}${review.reviewAt}`}
                        review={review}
                      />
                    );
                  })}
                </ReviewList>
              </ReviewContainer>
            </RightContainer>

            {/* <ReviewContainer>
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
                })} */}

            {/* <Map address={data.restaurantAddress} /> */}
          </RestaurantWrapper>
        </RestaurantInfoLayout>
      )}
    </>
  );
};

export default RestaurantInfo;
