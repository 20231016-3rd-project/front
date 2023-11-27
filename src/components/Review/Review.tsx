import Star from '../Star/Star';
import { useState } from 'react';
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
  setReviewsInfo: React.Dispatch<React.SetStateAction<ReviewType[]>>;
};

const Review: React.FC<ReviewProps> = ({ review, setReviewsInfo }) => {
  const [isReportReviewOpen, setIsReportReviewOpen] = useState(false);
  const [isViewReviewOpen, setIsViewReviewOpen] = useState(false);
  const [isPutReviewOpen, setIsPutReviewOpen] = useState(false);
  const [profile, setProfile] = useState({});
  const [empathyReview, setEmpathyReview] = useState(
    review.empathyReview ?? false
  );
  const [empathyCount, setEmpathyCount] = useState(review.reviewEmpathyCount);
  let location = useLocation();
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

  const { mutate } = deleteReviewMutation();
  const deleteButtonhHandler = () => {
    mutate(review.reviewId);
  };
  // useEffect(() => {
  //   getMyProfile().then((r) => setProfile(r));
  // }, []);
  console.log(localStorage.getItem('nickcname'));
  const [isLiked, setIsLiked] = useState(review.empathyReview);

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
          setReviewsInfo={setReviewsInfo}
        />
      )}
      {isViewReviewOpen && (
        <ViewReviewModal closeModal={closeViewReviewModal} />
      )}
      <ReviewLayout>
        <div className="review__header">
          <div className="review__profile">
            <div className="profile__image">
              <img src={review.memberProfilePicture} alt="" />
            </div>
            <div className="profile__info">
              <div className="profile__name">
                {review.memberNickname || '익명의 유저'}
              </div>
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

              {/* <LikeButton
                className={`like-button ${empathyReview ? 'liked' : ''}`}
              /> */}
              <div className="count-box">{empathyCount}</div>
            </LikeButtonBox>

            {/* "reviewEmpathyCount": 0,
                "empathyReview": false */}
            {localStorage.getItem('nickName') === review.memberNickname && (
              <ReviewButton onClick={openPutReviewModal}>수정</ReviewButton>
            )}
            {localStorage.getItem('nickName') !== null && (
              <ReviewButton onClick={openReportReviewModal}>신고</ReviewButton>
            )}
            {localStorage.getItem('nickName') === review.memberNickname && (
              <ReviewButton onClick={deleteButtonhHandler}>삭제</ReviewButton>
            )}
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
    </>
  );
};

export default Review;
