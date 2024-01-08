import Star from '../../../components/Star/Star';
import { useRef, useState } from 'react';
import ReportReviewModal from './../../../components/Review/ReportReviewModal';
import { ReviewLayout } from '../../../components/Review/Reviewstyle';
import { deleteReviewMutation } from '../../../hooks/reviewQuery';
import {
  Button,
  Text,
  Tooltip,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/rootReducer';
import AlertReview from '../../../components/Review/AlertReview';
type ReviewType = {
  restaurantId: number;
  restaurantName: string;
  reviewId: number;
  reviewAt: string;
  reviewContent: string;
  reviewImageDtoList: any[];
  reviewStarRating: number;
};

type ReviewProps = {
  review: ReviewType;
  reviewRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  // setReviewsInfo: React.Dispatch<React.SetStateAction<ReviewType[]>>;
};

const MyReview: React.FC<ReviewProps> = ({ review, reviewRefresh }) => {
  const [isReportReviewOpen, setIsReportReviewOpen] = useState(false);
  const [isViewReviewOpen, setIsViewReviewOpen] = useState(false);
  const [isPutReviewOpen, setIsPutReviewOpen] = useState(false);
  console.log(isViewReviewOpen && isPutReviewOpen);
  const { isAuthenticated } = useSelector((state: ReducerType) => state.auth);
  const {
    isOpen: removeReviewisOpen,
    onOpen: removeReviewOnOpen,
    onClose: removeReivewOnClose,
  } = useDisclosure();
  const removeReviewRef = useRef<HTMLButtonElement>(null);
  // let location = useLocation();

  // const openReportReviewModal = () => {
  //   setIsReportReviewOpen(true);
  // };
  const closeReportReviewModal = () => {
    setIsReportReviewOpen(false);
  };
  const openViewReviewModal = () => {
    setIsViewReviewOpen(true);
  };
  // const closeViewReviewModal = () => {
  //   setIsViewReviewOpen(false);
  // };
  const openPutReviewModal = () => {
    setIsPutReviewOpen(true);
  };
  // const closePutReviewModal = () => {
  //   setIsPutReviewOpen(false);
  // };
  console.log('Review', review);
  const toast = useToast();
  const { mutateAsync } = deleteReviewMutation();
  const deleteButtonhHandler = () => {
    try {
      mutateAsync(review.reviewId).then((r) => {
        reviewRefresh((state) => !state);
        return r;
      });

      toast({
        title: '리뷰가 삭제되었습니다.',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    } catch (error) {
      console.log(error);
      toast({
        title: '리뷰 삭제에 실패했습니다.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    }
  };
  // useEffect(() => {
  //   getMyProfile().then((r) => setProfile(r));
  // }, []);
  // const [isLiked, setIsLiked] = useState(review.empathyReview);
  console.log('elm', review);
  return (
    <>
      {isReportReviewOpen && (
        <ReportReviewModal
          closeModal={closeReportReviewModal}
          reviewId={review.reviewId}
        />
      )}
      {/* {isPutReviewOpen && (
        // <PutReviewModal
        //   closeModal={closePutReviewModal}
        //   review={review}
        //   // setReviewsInfo={setReviewsInfo}
        // />
      )} */}
      {review && (
        <ReviewLayout>
          <div className="review__header">
            <div className="review__profile">
              <div className="profile__image">
                {/* <img src={review.memberProfilePicture} alt="" /> */}
              </div>
              <div className="profile__info">
                <Tooltip
                  label={review.restaurantName}
                  placement="top"
                  fontSize={'0.75rem'}
                >
                  <div className="profile__name">
                    {review.restaurantName?.length < 12
                      ? review.restaurantName
                      : `${review.restaurantName?.substring(0, 11)} ...`}
                  </div>
                </Tooltip>
                <Text color={'grey'}>{formatDateString(review.reviewAt)}</Text>
                <div className="review__stars">
                  <Star score={review.reviewStarRating} />
                </div>
              </div>
            </div>

            <div className="review__buttons">
              {/* <LikeButtonBox onClick={clickLikeHandler}>
                <div className="icon-box">
                  <FaHeart
                    className="like-icon"
                    color={empathyReview ? '#f91880' : '#e0e0e0'}
                  />
                </div>

                <div className="count-box">{empathyCount}</div>
              </LikeButtonBox> */}

              {isAuthenticated && (
                // userData?.nickname === review.memberNickname &&
                <Button
                  onClick={openPutReviewModal}
                  colorScheme="yellow"
                  variant={'outline'}
                >
                  수정
                </Button>
              )}

              {isAuthenticated && (
                // userData?.nickname === review.memberNickname &&
                <Button
                  colorScheme="red"
                  variant={'outline'}
                  onClick={removeReviewOnOpen}
                  // onClick={deleteButtonhHandler}
                >
                  삭제
                </Button>
              )}
              <AlertReview
                isOpen={removeReviewisOpen}
                onOpen={removeReviewOnOpen}
                onClose={removeReivewOnClose}
                cancelRef={removeReviewRef}
                onDelete={deleteButtonhHandler}
              />
            </div>
          </div>

          <div className="review__text">{review.reviewContent}</div>

          <div className="review__images">
            {review.reviewImageDtoList?.map((image: any) => {
              console.log(review);
              return (
                <div>
                  <img
                    key={image.reviewImageId}
                    onClick={openViewReviewModal}
                    src={image.reviewResizeUrl}
                    alt="리뷰이미지"
                  />
                </div>
              );
            })}
          </div>
        </ReviewLayout>
      )}
    </>
  );
};

export default MyReview;

function formatDateString(inputString: string) {
  const date = new Date(inputString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 두 자리로 패딩
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const formattedString = `${year}-${month}-${day} ${hours}:${minutes}`;

  return formattedString;
}
