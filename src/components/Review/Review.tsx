// import styled from 'styled-components';
// import infoImg from '../../pages/restaurantInfo/info-image.jpg';
import Star from '../Star/Star';
import { useEffect, useState } from 'react';
import ReportReviewModal from './ReportReviewModal';
import ViewReviewModal from './ViewReviewModal';
import { getMyProfile } from '../../apis/profileApi';
import PutReviewModal from './PutReviewModal';
import { deleteReview, likeReview } from '../../apis/reviewApi';
import { useLocation } from 'react-router-dom';
import {LikeButton, ReviewLayout, LikeButtonBox, ReviewButton} from "./Reviewstyle";

const Review = ({ review, setReviewsInfo }) => {
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
      setEmpathyCount((prev) => prev - 1);
    } else {
      setEmpathyCount((prev) => prev + 1);
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

  const deleteButtonhHandler = () => {
    deleteReview(review.reviewId).then((r) => {
      if (r.status === 200) {
        alert('삭제되었습니다.');
        setReviewsInfo((prevState) => {
          const newContent = prevState.content.filter(
            (item) => item.reviewId !== review.reviewId
          );
          return { ...prevState, content: newContent };
        });
      }
    });
  };
  useEffect(() => {
    getMyProfile().then((r) => setProfile(r));
  }, []);
  const [isLiked, setIsLiked] = useState(review.empathReview);

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
              <img src={profile.memberProfilePicture} alt="" />
            </div>
            <div className="profile__info">
              <div className="profile__name">
                {review.memberId || profile.nickName} 회원님
              </div>
              <div className="review__stars">
                <Star score={review.reviewStarRating} />
              </div>
            </div>
          </div>
          
          <div className="review__buttons">
            <LikeButtonBox>
            <LikeButton className={`like-button ${empathyReview ? 'liked' : ''}`}
              onClick={clickLikeHandler}/>
              {empathyCount}
            </LikeButtonBox>
            
            {/* "reviewEmpathyCount": 0,
                "empathyReview": false */}
            <ReviewButton onClick={openPutReviewModal}>수정</ReviewButton>
            <ReviewButton onClick={openReportReviewModal}>신고</ReviewButton>
            <ReviewButton onClick={deleteButtonhHandler}>삭제</ReviewButton>
          </div>
        </div>


          <div className="review__text">
            {review.reviewContent}
          </div>

          <div className="review__images">
            {review.reviewImageDtoList?.map((image) => {
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

