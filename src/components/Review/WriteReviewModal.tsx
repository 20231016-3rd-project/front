import Modal from '../Modal/Modal';
import styled from 'styled-components';
import StarRating from '../Star/StarRating';
import ImageInput from '../../pages/restaurantInfo/ImageInput';
import { useState, useEffect } from 'react';
import { postReview } from '../../apis/reviewApi';
import { useParams } from 'react-router';
import { getMyProfile } from '../../apis/profileApi';
import { postReviewMutation } from '../../hooks/reviewQuery';
import UploadPhoto from './UploadPhoto';

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
};

type UserProfile = {
  email: string;
  memberProfilePicture: string;
  nickName: string;
  phone: string;
};
const WriteReviewModal: React.FC<ReviewProps> = ({ closeModal }) => {
  const [index, setIndex] = useState(0);

  const [rating, setRating] = useState<number | null>(null);
  const [content, setContent] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const { mutate, isError, isLoading } = postReviewMutation();
  const { restaurantId } = useParams();

  const contentChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  useEffect(() => {
    getMyProfile().then((r) => setProfile(r));
  }, []);
  console.log(profile);
  const formData = new FormData();

  return (
    <div>
      {index === 0 && (
        <Modal closeModal={closeModal}>
          <UploadPhoto></UploadPhoto>
        </Modal>
      )}
    </div>
  );

  //   // <Modal closeModal={closeModal}>
  //   {
  //     /* <WriteReviewStyle>
  //       <div className="modal__header">
  //         <div className="review__profile">
  //           <div className="profile__image">
  //             <img src={profile?.memberProfilePicture} alt="" />
  //           </div>
  //           <div className="profile__info">
  //             <div className="profile__name">{profile?.nickName}</div>

  //             <div className="review__stars">
  //               <StarRating rating={rating ?? 0} setRating={setRating} />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="modal__close-button" onClick={closeModal}>
  //           X
  //         </div>
  //       </div>
  //       <div className="modal__content">
  //         <div className="content__text">
  //           <textarea
  //             className="text"
  //             name=""
  //             id=""
  //             cols={80}
  //             rows={8}
  //             value={content}
  //             onChange={contentChangeHandler}
  //           ></textarea>
  //         </div>
  //       </div>

  //       <ModalFooter>
  //         <div>
  //           <ImageInput
  //             selectedFiles={selectedFiles}
  //             setSelectedFiles={setSelectedFiles}
  //           />
  //         </div>
  //         <button
  //           onClick={() => {
  //             //별점 유효성 검사
  //             //post
  //             let isAllValid = true;
  //             if (rating === null) {
  //               alert('별점을 입력해주세요');
  //               isAllValid = false;
  //             }
  //             if (content.length < 5) {
  //               alert('너무 짧은 리뷰입니다.');
  //               isAllValid = false;
  //             }
  //             if (isAllValid) {
  //               selectedFiles.forEach((file) => {
  //                 if (file) {
  //                   formData.append('imageFile', file);
  //                 }
  //               });
  //               const reviewSaveDto = {
  //                 reviewContent: content,
  //                 reviewStarRating: rating,
  //               };
  //               const json = JSON.stringify(reviewSaveDto);
  //               const dataBlob = new Blob([json], {
  //                 type: 'application/json',
  //               });
  //               formData.append('reviewSaveDto', dataBlob);
  //               mutate({ restaurantId: restaurantId, formData });
  //               closeModal();
  //             }
  //           }}
  //         >
  //           등록하기
  //         </button>
  //       </ModalFooter>
  //     </WriteReviewStyle> */
  //   }
  //   // </Modal>
  // );
};

export default WriteReviewModal;

const ModalFooter = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
  }
  button {
    height: 30px;
  }
`;

const WriteReviewStyle = styled.div`
  display: flex;
  width: 1000px;

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
    resize: none;
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
