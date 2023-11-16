import React from 'react';
import Modal from '../Modal/Modal';
import styled from 'styled-components';
import Star from '../Star/Star';
import { useState, useEffect } from 'react';
import { putReview } from '../../apis/reviewApi';
import PutImageInput from '../../pages/restaurantInfo/PutImageInput';
import { getMyProfile } from '../../apis/profileApi';
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

type ReviewsInfo = {
  content: ReviewType[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    sort: {};
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
  };
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
    // sort 속성의 구조에 대한 타입 지정
  };
  totalElements: number;
  totalPages: number;
};
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
  closeModal: () => void;
  review: ReviewType; // ReviewType으로 타입 지정
  setReviewsInfo: React.Dispatch<React.SetStateAction<ReviewType[]>>; // setReviewsInfo 타입 지정
};

type UserProfile = {
  email: string;
  memberProfilePicture: string;
  nickName: string;
  phone: string;
};
const PutReviewModal: React.FC<ReviewProps> = ({
  closeModal,
  review,
  setReviewsInfo,
}) => {
  const [rating, setRating] = useState<number | null>(review.reviewStarRating);
  const [content, setContent] = useState<string>(review?.reviewContent);
  const [selectedFiles, setSelectedFiles] = useState<any[]>(
    review.reviewImageDtoList
  );
  const [profile, setProfile] = useState<UserProfile | null>(null);
  useEffect(() => {
    getMyProfile().then((r) => {
      console.log('ppppppp', r);
      setProfile(r);
    });
  }, []);
  console.log('put review image:', selectedFiles);
  // const { restaurantId } = useParams();

  const contentChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const formData = new FormData();

  return (
    <Modal closeModal={closeModal}>
      <WriteReviewStyle>
        <div className="modal__header">
          <div className="review__profile">
            <div className="profile__image">
              <img src={profile?.memberProfilePicture} alt="" />
            </div>
            <div className="profile__info">
              <div className="profile__name">{profile?.nickName}</div>
              <div className="review__stars">
                <Star score={rating ?? 0} />
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
              cols={100}
              rows={10}
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
              setSelectedFiles([]);
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
                    (item: any) => item.reviewId !== review.reviewId
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


