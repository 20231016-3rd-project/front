import React from 'react';
import Modal from '../Modal/Modal';
import styled from 'styled-components';
import infoImg from '../../pages/restaurantInfo/info-image.jpg';
import Star from '../Star/Star';
import ImageSlider from './ImageSlider';

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
interface ViewReviewModalProps {
  closeModal: () => void;
  review: ReviewType;
}

const ViewReviewModal: React.FC<ViewReviewModalProps> = ({
  closeModal,
  review,
}) => {
  return (
    <Modal closeModal={closeModal}>
      <ViewReviewStyle>
        <div className="image-box">
          <ImageSlider slides={review.reviewImageDtoList} />
        </div>
        <div className="modal__side">
          <div className="modal__header">
            <div className="modal__title"></div>
            <div className="review__profile">
              <div className="profile__image">
                <img src={review.memberProfilePicture} alt="" />
              </div>
              <div className="profile__info">
                <div className="profile__name">{review.memberNickname}</div>
                <div className="review__stars">
                  <Star score={review.reviewStarRating} />
                </div>
              </div>
            </div>
          </div>
          <div className="modal__content">
            <div className="content__text">{review.reviewContent}</div>
          </div>
          {/* <div className="modal__footer">
            <button>공감</button>
            <button>신고 </button>
          </div> */}
        </div>
      </ViewReviewStyle>
    </Modal>
  );
};

export default ViewReviewModal;

const ViewReviewStyle = styled.div`
  display: flex;
  max-width: 1200px;
  height: 600px;
  background-color: #f1f1f1;
  border-radius: 0.5rem;
  gap: 1rem;
  padding: 1rem;
  .modal__side {
    /* background-color: white; */
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .image-box {
    width: 800px;
    aspect-ratio: 6 / 5;
    border: 0.5rem;
  }
  .modal__title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .review__profile {
    display: flex;
    justify-content: flex-start;
    gap: 1.5rem;
    margin: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid grey;
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

  .content__text {
    padding: 1rem;
    max-width: 300px;
    min-height: 300px;
    background-color: white;
    border-radius: 0.5rem;
    overflow-y: auto;
  }
  .modal__footer {
    width: 100%;
    background-color: white;
    border-radius: 0.5rem;
  }
`;
