import React from 'react';
import Modal from '../Modal/Modal';
import styled from 'styled-components';
import infoImg from '../../pages/restaurantInfo/info-image.jpg';
import Star from '../Star/Star';

const ViewReviewModal = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <ViewReviewStyle>
        <div className="image-box">image</div>
        <div className="modal__side">
          <div className="modal__header">
            <div className="modal__title">가게 정보</div>
            <div className="review__profile">
              <div className="profile__image">
                <img src={infoImg} alt="" />
              </div>
              <div className="profile__info">
                <div className="profile__name">nicknick</div>
                <div className="review__stars">
                  <Star score={4} />
                </div>
              </div>
            </div>
          </div>
          <div className="modal__content">
            <div className="content__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, sapiente alias eligendi fugit, rem placeat soluta dolor
              labore error ut aliquid vitae obcaecati explicabo nisi tempore,
              dolores perferendis expedita facere?
            </div>
          </div>
          <div className="modal__footer">
            <button>공감</button>
            <button>신고 </button>
          </div>
        </div>
      </ViewReviewStyle>
    </Modal>
  );
};

export default ViewReviewModal;

const ViewReviewStyle = styled.div`
  display: flex;
  width: 1200px;
  height: 600px;
  .image-box {
    width: 900px;
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
    width: 300px;
  }
`;
