import { useState } from 'react';
import Modal from '../Modal/Modal';
import styled from 'styled-components';
import { reportReview } from '../../apis/reviewApi';
const ReportReviewModal = ({ closeModal, reviewId }) => {
  const category = [
    { option1: '관련없는 내용' },
    { option2: '상업적 홍보' },
    { option3: '개인정보 유출 위험' },
    { option4: '저작권 불법 도용(타인이 작성한 글,사진)' },
    { option5: '욕설 및 비방' },
    { option6: '기타' },
  ];

  const [reportCategory, setReportCategory] = useState('');
  const [reportContent, setReportContent] = useState('');
  const contentChangehandler = (e) => {
    setReportContent(e.target.value);
  };
  const categoryChangehandler = (e) => {
    setReportCategory(e.target.value);
    console.log(reportCategory);
  };
  console.log({
    reviewId,
    reportCategory,
    reportContent,
  });
  const radios = category.map((option) => {
    return (
      <label htmlFor="">
        <input
          checked={Object.values(option)[0] === reportCategory}
          onChange={categoryChangehandler}
          type="radio"
          value={Object.values(option)[0]}
          name=""
          id=""
        />
        {Object.values(option)[0]}
      </label>
    );
  });

  const onClickhandler = () => {
    console.log({
      reviewId,
      reportCategory,
      reportContent,
    });
    const response = reportReview({
      reviewId,
      reportCategory,
      reportContent,
    }).then((r) => console.log(r));

    closeModal();
  };
  return (
    <Modal closeModal={closeModal}>
      <ReportReviewStyle>
        <div className="modal__header">신고하기</div>

        <div className="modal__content">
          신고하시는 사유를 선택해주세요.
          <br />
          {radios}
          <br />
          신고하시는 이유를 알려주세요
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="비방, 욕설, 광고, 잘못된 정보 등 신고 사유를 구체적으로 작성해주세요"
            onChange={contentChangehandler}
            value={reportContent}
          ></textarea>
        </div>
        <div className="modal__footer">
          <button onClick={onClickhandler}>등록하기</button>
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
  justify-content: space-around; // 컴포넌트들을 수직으로 정렬하고 간격을 일정하게 유지합니다.
  align-items: center; // 컴포넌트들을 가로 방향으로 중앙에 배치합니다.
  padding: 10px; // 컴포넌트와 테두리 사이의 간격을 추가합니다.

  .modal__header {
    border-bottom: 1px solid black;
    font-size: 2rem;
    text-align: center;
    width: 100%; // modal__header의 너비를 부모 요소의 100%로 설정합니다.
  }
  .modal__content {
    display: flex;
    flex-direction: column;
    width: 100%; // modal__content의 너비를 부모 요소의 100%로 설정합니다.
  }
  .modal__footer {
    display: flex;
    justify-content: center; // modal__footer 내부의 버튼을 중앙에 배치합니다.
    width: 100%; // modal__footer의 너비를 부모 요소의 100%로 설정합니다.
  }
`;
