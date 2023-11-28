import { useState, ChangeEvent } from 'react';
import Modal from '../Modal/Modal';
import styled from 'styled-components';
import { postEditInfoRequest } from '../../apis/restaurantApi';

interface EditinfoModalProps {
  closeModal: () => void;
  restaurantId: string;
}
const EditinfoRequestModal: React.FC<EditinfoModalProps> = ({
  closeModal,
  restaurantId,
}) => {
  const category = [
    { option1: '매장 이전' },
    { option2: '메장 폐업' },
    { option3: '메뉴 변경' },
    { option4: '운영 시간 변경' },
    { option5: '휴업' },
    { option6: '기타' },
  ];

  const [reportCategory, setReportCategory] = useState('');
  const [requestContent, setRequestContent] = useState('');
  const contentChangehandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setRequestContent(e.target.value);
  };
  const categoryChangehandler = (e: ChangeEvent<HTMLInputElement>) => {
    setReportCategory(e.target.value);
    console.log(reportCategory);
  };

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
      restaurantId,
      reportCategory,
      requestContent,
    });
    postEditInfoRequest({
      reportCategory,
      restaurantId,
      requestContent,
    }).then((r) => console.log('post edit info request:', r));

    closeModal();
  };
  return (
    <Modal closeModal={closeModal}>
      <ReportReviewStyle>
        <div className="modal__header">정보 수정 요청</div>

        <div className="modal__content">
          <h1>※ 정보 수정 카테고리를 골라주세요.</h1>
          {radios}
          <p>상세 변경 내역을 알려주세요</p>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="폐업, 휴업, 이전, 잘못된 정보 등 수정 사유를 구체적으로 작성해주세요"
            onChange={contentChangehandler}
            value={requestContent}
          ></textarea>
        </div>
        <div className="modal__footer">
          <Button onClick={onClickhandler}>등록하기</Button>
        </div>
      </ReportReviewStyle>
    </Modal>
  );
};

export default EditinfoRequestModal;

const ReportReviewStyle = styled.div`
  width: 440px;
  max-height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: scroll;
  .modal__header {
    border-bottom: 1px solid grey;

    font-size: 1.25rem;
    text-align: center;
    margin: 0.5rem;
  }
  .modal__content {
    textarea {
      resize: none;
      border: solid 1px grey;
    }
    display: flex;
    flex-direction: column;
    margin-bottom: 1px solid black;
    gap: 0.25rem;
  }
  .modal__footer {
    display: flex;
    justify-content: center;
  }
`;

const Button = styled.button`
  align-items: center;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 10px;
  border-style: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  height: 30px;
  width: 260px;
  justify-content: center;
  padding: 1px 20px;

  &:hover {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(45deg, #f9b916, #f96216);
    transition: opacity 0.3s ease; // 그라데이션 효과를 부드럽게 만듭니다.
    color: white;
  }

  &:active {
    transform: scale(0.95); // 버튼이 눌렸을 때 약간 축소
  }
`;
