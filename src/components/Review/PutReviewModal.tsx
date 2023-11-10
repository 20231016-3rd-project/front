import React from 'react';
import Modal from '../Modal/Modal';
import styled from 'styled-components';
import infoImg from '../../pages/restaurantInfo/info-image.jpg';
import StarRating from '../Star/StarRating';
import ImageInput from '../../pages/restaurantInfo/ImageInput';
import { useState } from 'react';
import { postReview, putReview } from '../../apis/reviewApi';
import { useParams } from 'react-router';
import PutImageInput from '../../pages/restaurantInfo/PutImageInput';

// {
//   "reviewId": 14,
//   "memberId": 3,
//   "memberNickname": "유저1",
//   "memberProfilePicture": "https://plate-user-img.s3.ap-northeast-2.amazonaws.com/BasicImage.png",
//   "reviewContent": "심심심",
//   "reviewStarRating": 1,
//   "reviewAt": "2023-11-07T10:27:27",
//   "reviewImageDtoList": [],
//   "reviewEmpathyCount": 0,
//   "empathyReview": false
// }

// [
//   [
//       {
//           "reviewImageId": 9,
//           "reviewOriginName": "local_image - 복사본 (2).jpg",
//           "reviewStoredName": "e1d2cfed-ace3-4e9a-b18b-77b93ff2d0eb.jpg",
//           "reviewResizeStoredName": "resized_e1d2cfed-ace3-4e9a-b18b-77b93ff2d0eb.jpg",
//           "reviewOriginUrl": "https://plate-review-img.s3.ap-northeast-2.amazonaws.com/e1d2cfed-ace3-4e9a-b18b-77b93ff2d0eb.jpg",
//           "reviewResizeUrl": "https://plate-review-img.s3.ap-northeast-2.amazonaws.com/resized_e1d2cfed-ace3-4e9a-b18b-77b93ff2d0eb.jpg"
//       },
//       {
//           "reviewImageId": 10,
//           "reviewOriginName": "local_image - 복사본.jpg",
//           "reviewStoredName": "677677a8-07ec-4cc7-9761-7bb536ba8683.jpg",
//           "reviewResizeStoredName": "resized_677677a8-07ec-4cc7-9761-7bb536ba8683.jpg",
//           "reviewOriginUrl": "https://plate-review-img.s3.ap-northeast-2.amazonaws.com/677677a8-07ec-4cc7-9761-7bb536ba8683.jpg",
//           "reviewResizeUrl": "https://plate-review-img.s3.ap-northeast-2.amazonaws.com/resized_677677a8-07ec-4cc7-9761-7bb536ba8683.jpg"
//       },
//       {
//           "reviewImageId": 11,
//           "reviewOriginName": "local_image.jpg",
//           "reviewStoredName": "e8f58c2c-ada1-4551-b7d3-3f04e9520c9a.jpg",
//           "reviewResizeStoredName": "resized_e8f58c2c-ada1-4551-b7d3-3f04e9520c9a.jpg",
//           "reviewOriginUrl": "https://plate-review-img.s3.ap-northeast-2.amazonaws.com/e8f58c2c-ada1-4551-b7d3-3f04e9520c9a.jpg",
//           "reviewResizeUrl": "https://plate-review-img.s3.ap-northeast-2.amazonaws.com/resized_e8f58c2c-ada1-4551-b7d3-3f04e9520c9a.jpg"
//       }
//   ]
// ]

const PutReviewModal = ({ closeModal, review, setReviewsInfo }) => {
  const [rating, setRating] = useState<number | null>(review.reviewStarRating);
  const [content, setContent] = useState(review.reviewContent);
  const [selectedFiles, setSelectedFiles] = useState(review.reviewImageDtoList);
  console.log('put review image:', selectedFiles);
  // const { restaurantId } = useParams();

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
              <div className="profile__name">nicknick</div>
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
            <PutImageInput
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
            />
          </div>
          <button
            onClick={() => {
              //별점 유효성 검사
              //post
              selectedFiles.forEach((item) => {
                if (item.file !== undefined) {
                  formData.append('imageFile', item.file);
                }
              });
              setSelectedFiles(null);
              const updateReviewDto = {
                reviewContent: content,
                imageDtoList: selectedFiles
                  .map((item) => {
                    return { imageId: item.reviewImageId };
                  })
                  .filter((item) => item.imageId !== undefined),
              };
              console.log('updateReviewDto', updateReviewDto);
              const json = JSON.stringify(updateReviewDto);
              const dataBlob = new Blob([json], {
                type: 'application/json',
              });
              formData.append('updateReviewDto', dataBlob);
              putReview(review.reviewId, formData).then((r) => {
                console.log('put Review response', r);
                setReviewsInfo((prevState) => {
                  const removeOldReview = prevState.content.filter(
                    (item) => item.reviewId !== review.reviewId
                  );
                  const newContent = [r, ...removeOldReview];
                  return {
                    ...prevState,
                    content: newContent,
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

// {
//   "restaurantId": 1,
//   "restaurantName": "피자네버슬립스 합정상수점",
//   "reviewContent": "안녕하세요. 감사해요. 다시 만나요",
//   "reviewStarRating": 4,
//   "reviewImageDto": [],
//   "reviewAt": "2023-11-09T11:11:37"
// }

export default PutReviewModal;

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


