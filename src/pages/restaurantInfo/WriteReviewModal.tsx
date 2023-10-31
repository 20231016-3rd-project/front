import React from 'react';
import Modal from '../../components/Modal/Modal';
import styled from 'styled-components';
import infoImg from './info-image.jpg';
import StarRating from './StarRating';
import ImageInput from './ImageInput';

const WriteReviewModal = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <WriteReviewStyle>
        <div className="modal__header">
          <div className="review__profile">
            <div className="profile__image">
              <img src={infoImg} alt="" />
            </div>
            <div className="profile__info">
              <div className="profile__name">nicknick</div>
              <div className="review__stars">
                <StarRating />
              </div>
            </div>
          </div>
          <div className="modal__close-button" onClick={closeModal}>
            X
          </div>
        </div>
        <div className="modal__content">
          <div className="content__text">
            <textarea
              className="text"
              name=""
              id=""
              cols="100"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="modal__footer">
          <div>
            <ImageInput />
          </div>
          <button
            onClick={() => {
              //별점 유효성 검사
              //post
              closeModal();
            }}
          >
            등록하기
          </button>
        </div>
      </WriteReviewStyle>
    </Modal>
  );
};

export default WriteReviewModal;

const WriteReviewStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .modal__header {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 1rem;
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
  .modal__close-button {
    cursor: pointer;
  }
  .text {
    font-size: 20px;
    margin: 1rem;
    border: 1px solid black;
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
  .modal__footer {
    display: flex;
    justify-content: space-around;
  }
`;
