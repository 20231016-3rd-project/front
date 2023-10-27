import ReactDOM from 'react-dom';
import './Modal.css';
import React from 'react';
import close from '/src/assets/images/close.svg';

interface OwnProps {
  closeModal?: () => void;
}

const RegionSelect: React.FC<OwnProps> = ({ closeModal }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className="backdrop" onClick={closeModal} />,
        document.getElementById('backdrop-root') as HTMLElement
      )}

      {ReactDOM.createPortal(
        <div className="modal-box">
          <div className="location-header">지역 선택</div>
          <div className="location-district">
            <div className="district-title">광역시도</div>
            <div className="district-title">시군구</div>
            <div className="district-title">읍면동</div>
          </div>
          <div className="district-list-box">
            <ul className="district-list">
              <li>
                <button className="district-item-btn-now">서울</button>
              </li>
              <li>
                <button className="district-item-btn">경기</button>
              </li>
            </ul>
            <ul className="district-list">
              <li>
                <button className="district-item-btn-now">전체</button>
              </li>
              <li>
                <button className="district-item-btn">종로구</button>
              </li>
              <li>
                <button className="district-item-btn">마포구</button>
              </li>
              <li>
                <button className="district-item-btn">중구</button>
              </li>
              <li>
                <button className="district-item-btn">종로구</button>
              </li>
              <li>
                <button className="district-item-btn">마포구</button>
              </li>
              <li>
                <button className="district-item-btn">중구</button>
              </li>
              <li>
                <button className="district-item-btn">종로구</button>
              </li>
              <li>
                <button className="district-item-btn">마포구</button>
              </li>
              <li>
                <button className="district-item-btn">중구</button>
              </li>
              <li>
                <button className="district-item-btn">종로구</button>
              </li>
              <li>
                <button className="district-item-btn">마포구</button>
              </li>
              <li>
                <button className="district-item-btn">중구</button>
              </li>
              <li>
                <button className="district-item-btn">종로구</button>
              </li>
              <li>
                <button className="district-item-btn">마포구</button>
              </li>
              <li>
                <button className="district-item-btn">중구</button>
              </li>
              <li>
                <button className="district-item-btn">종로구</button>
              </li>
              <li>
                <button className="district-item-btn">마포구</button>
              </li>
              <li>
                <button className="district-item-btn">중구</button>
              </li>
              <li>
                <button className="district-item-btn">종로구</button>
              </li>
              <li>
                <button className="district-item-btn">마포구</button>
              </li>
              <li>
                <button className="district-item-btn">중구</button>
              </li>
              <li>
                <button className="district-item-btn">종로구</button>
              </li>
              <li>
                <button className="district-item-btn">마포구</button>
              </li>
              <li>
                <button className="district-item-btn">중구</button>
              </li>
            </ul>
            <ul className="district-list-end">
              <li>
                <button className="district-item-btn-now">전체</button>
              </li>
              <li>
                <button className="district-item-btn">1번동</button>
              </li>
              <li>
                <button className="district-item-btn">2번동</button>
              </li>
              <li>
                <button className="district-item-btn">3번동</button>
              </li>
              <li>
                <button className="district-item-btn">4번동</button>
              </li>
            </ul>
          </div>
          <div className="button-box">
            <button className="cancelButton" onClick={closeModal}>취소</button>
            <button className="submitButton">선택 완료</button>
          </div>

          <button className="close" onClick={closeModal}>
            <img className="close-img" src={close} alt="" />
          </button>
        </div>,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
};

export default RegionSelect;
