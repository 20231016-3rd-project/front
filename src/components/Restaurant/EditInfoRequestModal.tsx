import { useState } from 'react';
import Modal from '../Modal/Modal';
import styled from 'styled-components';
import { postEditInfoRequest } from '../../apis/restaurantApi';
const EditinfoRequestModal = ({ closeModal, restaurantId }) => {
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
  const contentChangehandler = (e) => {
    setRequestContent(e.target.value);
  };
  const categoryChangehandler = (e) => {
    setReportCategory(e.target.value);
    console.log(reportCategory);
  };
  console.log({
    restaurantId,
    reportCategory,
    requestContent,
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
      restaurantId,
      reportCategory,
      requestContent,
    });
    const response = postEditInfoRequest({
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
          정보 수정 카테고리를 골라주세요.
          <br />
          {radios}
          <br />
          상세 변경 내역을 알려주세요
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="폐업, 휴업, 이전, 잘못된 정보 등 수정 사유를 구체적으로 작성해주세요"
            onChange={contentChangehandler}
            value={requestContent}
          ></textarea>
        </div>
        <div className="modal__footer">
          <button onClick={onClickhandler}>등록하기</button>
        </div>
      </ReportReviewStyle>
    </Modal>
  );
};

export default EditinfoRequestModal;

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
