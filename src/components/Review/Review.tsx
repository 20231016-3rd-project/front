import styled from 'styled-components';
import infoImg from '../../pages/restaurantInfo/info-image.jpg';
import Star from '../Star/Star';
import { useEffect, useState } from 'react';
import ReportReviewModal from './ReportReviewModal';
import ViewReviewModal from './ViewReviewModal';
import { getMyProfile } from '../../apis/profileApi';
import PutReviewModal from './PutReviewModal';
const Review = ({ review }) => {
  const [isReportReviewOpen, setIsReportReviewOpen] = useState(false);
  const [isViewReviewOpen, setIsViewReviewOpen] = useState(false);
  const [isPutReviewOpen, setIsPutReviewOpen] = useState(false);
  const [profile, setProfile] = useState({});
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
  console.log(review);

  useEffect(() => {
    getMyProfile().then((r) => setProfile(r));
  }, []);
  const [isLiked, setIsLiked] = useState(review.empathReview);
  const handleLikeClick = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };
  return (
    <>
      {isReportReviewOpen && (
        <ReportReviewModal
          closeModal={closeReportReviewModal}
          reviewId={review.reviewId}
        />
      )}
      {isPutReviewOpen && (
        <PutReviewModal closeModal={closePutReviewModal} review={review} />
      )}
      {isViewReviewOpen && (
        <ViewReviewModal closeModal={closeViewReviewModal} />
      )}
      <ReviewLayout>
        <div className="review__header">
          <div className="review__profile">
            <div className="profile__image">
              <img src={profile.memberProfilePicture} alt="" />
            </div>
            <div className="profile__info">
              <div className="profile__name">
                {review.memberId || profile.nickName}
              </div>
              <div className="review__stars">
                <Star score={review.reviewStarRating} />
              </div>
            </div>
          </div>
          <div className="review__buttons">
            <button onClick={openPutReviewModal}>수정</button>
            <LikeButton
              className={`like-button ${isLiked ? 'liked' : ''}`}
              onClick={handleLikeClick}
            >
              공감{review.reviewEmpathyCount}
            </LikeButton>
            {/* "reviewEmpathyCount": 0,
                "empathyReview": false */}
            <button onClick={openReportReviewModal}>신고</button>
            <button>삭제</button>
          </div>
        </div>
        <div className="review__content">
          <div className="review__text">{review.reviewContent}</div>
          <div className="review__images">
            {review.reviewImageDto?.map((image) => {
              return (
                <img
                  onClick={openViewReviewModal}
                  src={image.reviewResizeUrl}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </ReviewLayout>
    </>
  );
};

export default Review;
const LikeButton = styled.button`
  $red: #ff3252;
  display: inline-block;
  position: relative;
  font-size: 32px;
  cursor: pointer;
  // border: 1px solid black;
  &::before {
    font-size: 3em;
    color: #000;
    content: '♥';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &::after {
    font-size: 3em;
    color: $red;
    content: '♥';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.2s;
  }
  &.liked::after {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const ReviewLayout = styled.div`
  margin: 16px;
  .review__header {
    display: flex;
    justify-content: space-between;
  }
  .review__profile {
    display: flex;
    justify-content: flex-start;
    gap: 1.5rem;
  }
  .profile__image img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .profile__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  .profile__name {
  }

  .review__stars {
  }
  .review__buttons {
  }

  .review__content {
  }
  .review__text {
    font-size: 1.25rem;
  }
  .review__images {
    display: flex;
    justify-content: flex-start;
    margin: 1rem;
    gap: 0.5rem;

    img {
      width: 100px;
      height: 100px;
      cursor: pointer;
    }
    img:hover {
    }
  }
`;
