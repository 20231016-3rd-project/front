import { useState, ChangeEvent } from 'react';
import Modal from '../Modal/Modal';
import styled from 'styled-components';
import { reportReview } from '../../apis/reviewApi';
import { useToast } from '@chakra-ui/react';

interface ReportReviewModalProps {
  closeModal: () => void;
  reviewId: number;
}

const ReportReviewModal: React.FC<ReportReviewModalProps> = ({
  closeModal,
  reviewId,
}) => {
  const toast = useToast();

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
  const contentChangehandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReportContent(e.target.value);
  };
  const categoryChangehandler = (e: ChangeEvent<HTMLInputElement>) => {
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
        <RadioInput
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
    try {
      reportReview({
        reviewId,
        reportCategory,
        reportContent,
      }).then((r) => console.log(r));
      toast({
        title: '신고가 완료되었습니다.',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    } catch (error) {
      toast({
        title: '전송에 실패했습니다.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      closeModal();
    }
  };
  return (
    <Modal closeModal={closeModal}>
      <ReportReviewStyle>
        <div className="modal__header">
          <div className="header__text">신고하기</div>
        </div>

        <div className="modal__content">
          신고하시는 사유를 선택해주세요.
          <br />
          {radios}
          <br />
          신고하시는 이유를 알려주세요
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="비방, 욕설, 광고, 잘못된 정보 등 신고 사유를 구체적으로 작성해주세요"
            onChange={contentChangehandler}
            value={reportContent}
          ></textarea>
        </div>
        <div className="modal__footer">
          <button onClick={onClickhandler}>신고하기</button>
        </div>
      </ReportReviewStyle>
    </Modal>
  );
};

export default ReportReviewModal;

const ReportReviewStyle = styled.div`
  background-color: white;
  width: 400px;
  min-height: 500px;

  display: flex;
  flex-direction: column;
  gap: 1rem; // 컴포넌트들을 수직으로 정렬하고 간격을 일정하게 유지합니다.
  align-items: center; // 컴포넌트들을 가로 방향으로 중앙에 배치합니다.
  .modal__header {
    width: 100%; // modal__header의 너비를 부모 요소의 100%로 설정합니다.
    height: 3rem;
    padding: 0.5rem 1rem 0 1rem;
  }
  .header__text {
    border-bottom: 1px solid #794a39;

    text-align: start;
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }
  .modal__content {
    display: flex;
    flex-direction: column;
    width: 100%; // modal__content의 너비를 부모 요소의 100%로 설정합니다.
    padding-left: 0.5rem;
    gap: 0.5rem;

    textarea {
      border: solid 1px #794a39;

      resize: none;
      border-radius: 8px;
      padding: 4px;
    }
  }
  .modal__footer {
    display: flex;
    justify-content: center; // modal__footer 내부의 버튼을 중앙에 배치합니다.
    width: 100%; // modal__footer의 너비를 부모 요소의 100%로 설정합니다.
  }

  button {
    cursor: pointer;
    width: 100%;
    padding: 0.5rem;
    background-color: white;
    border-radius: 8px;
    border: solid 1px #794a39;
    &:hover {
      background-color: #f9b916; // hover 시 노란색으로 변경
    }
  }
`;

const RadioInput = styled.input`
  border: 1px solid black;
  &:checked {
    background-color: #e74c3c; /* 체크된 상태일 때의 배경색 */
  }
`;
