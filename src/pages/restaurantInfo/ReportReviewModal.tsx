import React from 'react';
import Modal from '../../components/Modal/Modal';
import styled from 'styled-components';

const ReportReviewModal = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <ReportReviewStyle>
        <div className="modal__header">신고하기</div>
        <div className="modal__content">
          신고하시는 사유를 선택해주세요.
          <label htmlFor="">
            <input type="radio" name="" id="" />
            관련없는 내용
          </label>
          <label htmlFor="">
            <input type="radio" name="" id="" />
            상업적 홍보
          </label>
          <label htmlFor="">
            <input type="radio" name="" id="" />
            개인정보 유출 위험
          </label>
          <label htmlFor="">
            <input type="radio" name="" id="" />
            저작권 불법 도용(타인이 작성한 글,사진)
          </label>
          <label htmlFor="">
            <input type="radio" name="" id="" />
            기타
          </label>
          신고하시는 이유를 알려주세요
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="비방, 욕설, 광고, 잘못된 정보 등 신고 사유를 구체적으로 작성해주세요"
          ></textarea>
        </div>
        <div className="modal__footer">
          <button>등록하기</button>
        </div>
      </ReportReviewStyle>
    </Modal>
  );
};

export default ReportReviewModal;

const ReportReviewStyle = styled.div`
  background-color: white;
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: auto;
  .modal__header {
    border-bottom: 1px solid black;
    font-size: 2rem;
    text-align: center;
    margin: 1rem;
  }
  .modal__content {
    display: flex;
    flex-direction: column;
    margin-bottom: 1px solid black;
  }
`;
