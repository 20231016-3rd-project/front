import Star from '../Star/Star';
import { useRef, useState } from 'react';
import ReportReviewModal from './ReportReviewModal';
import ViewReviewModal from './ViewReviewModal';
import PutReviewModal from './PutReviewModal';
import { deleteReview, likeReview } from '../../apis/reviewApi';
import { useLocation } from 'react-router-dom';
import {
  LikeButton,
  ReviewLayout,
  LikeButtonBox,
  ReviewButton,
} from './Reviewstyle';
import { deleteReviewMutation } from '../../hooks/reviewQuery';
import { FaHeart } from 'react-icons/fa';
import {
  AlertDialog,
  Button,
  Tooltip,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../store/rootReducer';
import AlertReview from './AlertReview';

type ReviewType = {
  reviewId: number;
  memberId: number;
  memberNickname: string;
  memberProfilePicture: string;
  reviewAt: string;
  reviewContent: string;
  reviewEmpathyCount: number;
  reviewImageDtoList: any[];
  reviewStarRating: number;
  empathyReview: boolean;
};

type ReviewProps = {
  review: ReviewType;
  // setReviewsInfo: React.Dispatch<React.SetStateAction<ReviewType[]>>;
};

const Review: React.FC<ReviewProps> = ({ review }) => {
  const [isReportReviewOpen, setIsReportReviewOpen] = useState(false);
  const [isViewReviewOpen, setIsViewReviewOpen] = useState(false);
  const [isPutReviewOpen, setIsPutReviewOpen] = useState(false);
  const [empathyReview, setEmpathyReview] = useState(
    review.empathyReview ?? false
  );
  const [empathyCount, setEmpathyCount] = useState(review.reviewEmpathyCount);
  const { isAuthenticated, userData } = useSelector(
    (state: ReducerType) => state.auth
  );
  const {
    isOpen: removeReviewisOpen,
    onOpen: removeReviewOnOpen,
    onClose: removeReivewOnClose,
  } = useDisclosure();
  const removeReviewRef = useRef<HTMLButtonElement>(null);
  // let location = useLocation();
  const clickLikeHandler = () => {
    setEmpathyReview((prev: boolean) => !prev);
    if (empathyReview) {
      setEmpathyCount((prev: any) => prev - 1);
    } else {
      setEmpathyCount((prev: any) => prev + 1);
    }
    likeReview(review.reviewId);
  };
  const openReportReviewModal = () => {
    setIsReportReviewOpen(true);
  };
  const closeReportReviewModal = () => {
    setIsReportReviewOpen(false);
  };
  const openViewReviewModal = () => {
    setIsViewReviewOpen(true);
  };
  const closeViewReviewModal = () => {
    setIsViewReviewOpen(false);
  };
  const openPutReviewModal = () => {
    setIsPutReviewOpen(true);
  };
  const closePutReviewModal = () => {
    setIsPutReviewOpen(false);
  };
  console.log('Review', review);
  const toast = useToast();
  const { mutate, mutateAsync } = deleteReviewMutation();
  const deleteButtonhHandler = () => {
    mutateAsync(review.reviewId).then((r: any) => {
      if (r.isAxiosError) {
        toast({
          title: '리뷰 삭제에 실패했습니다.',
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top',
        });
      } else {
        toast({
          title: '리뷰가 삭제되었습니다.',
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
        });
      }
    });
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
      {isPutReviewOpen && (
        <PutReviewModal
          closeModal={closePutReviewModal}
          review={review}
          // setReviewsInfo={setReviewsInfo}
        />
      )}
      {isViewReviewOpen && (
        <ViewReviewModal closeModal={closeViewReviewModal} review={review} />
      )}
      {review && (
        <ReviewLayout>
          <div className="review__header">
            <div className="review__profile">
              <div className="profile__image">
                <img src={review.memberProfilePicture} alt="" />
              </div>
              <div className="profile__info">
                <Tooltip
                  label={review.memberNickname}
                  placement="top"
                  fontSize={'0.75rem'}
                >
                  <div className="profile__name">
                    {review.memberNickname?.length < 8
                      ? review.memberNickname
                      : `${review.memberNickname?.substring(0, 6)} ...`}
                  </div>
                </Tooltip>
                <div className="review__stars">
                  <Star score={review.reviewStarRating} />
                </div>
              </div>
            </div>

            <div className="review__buttons">
              <LikeButtonBox onClick={clickLikeHandler}>
                <div className="icon-box">
                  <FaHeart
                    className="like-icon"
                    color={empathyReview ? '#f91880' : '#e0e0e0'}
                  />
                </div>

                <div className="count-box">{empathyCount}</div>
              </LikeButtonBox>

              {isAuthenticated &&
                userData?.nickname === review.memberNickname && (
                  <Button
                    onClick={openPutReviewModal}
                    colorScheme="yellow"
                    variant={'outline'}
                  >
                    수정
                  </Button>
                )}
              {isAuthenticated &&
                userData?.nickname !== null &&
                userData?.nickname !== review.memberNickname && (
                  <Button onClick={openReportReviewModal}>신고</Button>
                )}
              {isAuthenticated &&
                userData?.nickname === review.memberNickname && (
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

export default Review;
