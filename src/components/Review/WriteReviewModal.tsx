import React from 'react';
import Modal from '../Modal/Modal';
import styled from 'styled-components';
import infoImg from '../../pages/restaurantInfo/info-image.jpg';
import StarRating from '../Star/StarRating';
import ImageInput from '../../pages/restaurantInfo/ImageInput';
import { useState } from 'react';
import { postReview } from '../../apis/reviewApi';
import { useParams } from 'react-router';
const WriteReviewModal = ({ closeModal, setReviewsInfo }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [content, setContent] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { restaurantId } = useParams();

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const formData = new FormData();

  return (
    <Modal closeModal={closeModal}>
      <WriteReviewStyle>
        <div className="modal__header">
          <div className="review__profile">
            <div className="profile__image">
              <img src={infoImg} alt="" />
            </div>
            <div className="profile__info">
              <div className="profile__name">Nickname 님</div>
              <div className="review__stars">
                <StarRating rating={rating} setRating={setRating} />
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
              value={content}
              onChange={contentChangeHandler}
            ></textarea>
          </div>
        </div>


        <ModalFooter>
          <div>
            <ImageInput
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
            />
          </div>
          <button
            onClick={() => {
              //별점 유효성 검사
              //post
              selectedFiles.forEach((file) => {
                if (file) {
                  formData.append('imageFile', file);
                }
              });
              const reviewSaveDto = {
                reviewContent: content,
                reviewStarRating: rating,
              };
              const json = JSON.stringify(reviewSaveDto);
              const dataBlob = new Blob([json], {
                type: 'application/json',
              });
              formData.append('reviewSaveDto', dataBlob);
              postReview(restaurantId, formData).then((r) => {
                console.log('postReview response', r);
                setReviewsInfo((prevState) => {
                  return {
                    ...prevState,
                    content: [r, ...prevState.content],
                  };
                });
              });
              closeModal();
            }}
          >
            등록하기
          </button>
        </ModalFooter>
      </WriteReviewStyle>
    </Modal>
  );
};

export default WriteReviewModal;

const ModalFooter = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  div{
    
  }
  button{
    height: 30px;
  }
`;

const WriteReviewStyle = styled.div`
  display: flex;
  width: 1000px ;
  height: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .modal__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 1rem;
  }
  .review__profile {
    display: flex;
    justify-content: flex-start;
    gap: 0.8rem;
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
    align-self: flex-start;
  }
  .modal__close-button {
    cursor: pointer;
    margin-right: 10px;
  }
  .text {
    width: 100%;
    font-size: 20px;
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

  .ImageInput {

  }
`;


