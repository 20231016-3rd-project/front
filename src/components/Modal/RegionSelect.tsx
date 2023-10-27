import ReactDOM from 'react-dom';
import './Modal.css';
import React, { useState } from 'react';
import close from '/src/assets/images/close.svg';

interface OwnProps {
  closeModal?: () => void;
}

const RegionSelect: React.FC<OwnProps> = ({ closeModal }) => {
  const [first, setFirst] = useState<string>('서울');
  const [second, setSecond] = useState<string>('전체');
  const [third, setThird] = useState<string>('전체');
  const handleFirst = (e) => {
    setFirst(e.target.value);
    setSecond("전체")
    setThird("전체");
  };
  const handleSecond = (e) => {
    setSecond(e.target.value);
    setThird('전체');
  };
  const handleThird = (e) => {
    setThird(e.target.value);
  };

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
                <button
                  className={
                    first === '서울'
                      ? 'district-item-btn-now'
                      : 'district-item-btn'
                  }
                  value="서울"
                  onClick={handleFirst}
                >
                  서울
                </button>
              </li>
              <li>
                <button
                  className={
                    first === '경기'
                      ? 'district-item-btn-now'
                      : 'district-item-btn'
                  }
                  value="경기"
                  onClick={handleFirst}
                >
                  경기
                </button>
              </li>
            </ul>

            <ul className="district-list">
              <li>
                <button
                  className={
                    second === '전체'
                      ? 'district-item-btn-now'
                      : 'district-item-btn'
                  }
                  value="전체"
                  onClick={handleSecond}
                >
                  전체
                </button>
              </li>
              {first === '서울' && (
                <>
                  <li>
                    <button
                      className={
                        second === '종로구'
                          ? 'district-item-btn-now'
                          : 'district-item-btn'
                      }
                      value="종로구"
                      onClick={handleSecond}
                    >
                      종로구
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        second === '마포구'
                          ? 'district-item-btn-now'
                          : 'district-item-btn'
                      }
                      value="마포구"
                      onClick={handleSecond}
                    >
                      마포구
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        second === '중구'
                          ? 'district-item-btn-now'
                          : 'district-item-btn'
                      }
                      value="중구"
                      onClick={handleSecond}
                    >
                      중구
                    </button>
                  </li>
                </>
              )}
              {first === '경기' && (
                <>
                  <li>
                    <button
                      className={
                        second === '수원'
                          ? 'district-item-btn-now'
                          : 'district-item-btn'
                      }
                      value="수원"
                      onClick={handleSecond}
                    >
                      수원
                    </button>
                  </li>
                </>
              )}

              {/* <li>
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
              </li> */}
            </ul>
            <ul className="district-list-end">
              {second != '전체' && (
                <>
                  <li>
                    <button
                      className={
                        third === '전체'
                          ? 'district-item-btn-now'
                          : 'district-item-btn'
                      }
                      value="전체"
                      onClick={handleThird}
                    >
                      전체
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        third === '1번동'
                          ? 'district-item-btn-now'
                          : 'district-item-btn'
                      }
                      value="1번동"
                      onClick={handleThird}
                    >
                      1번동
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        third === '2번동'
                          ? 'district-item-btn-now'
                          : 'district-item-btn'
                      }
                      value="2번동"
                      onClick={handleThird}
                    >
                      2번동
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        third === '3번동'
                          ? 'district-item-btn-now'
                          : 'district-item-btn'
                      }
                      value="3번동"
                      onClick={handleThird}
                    >
                      3번동
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        third === '4번동'
                          ? 'district-item-btn-now'
                          : 'district-item-btn'
                      }
                      value="4번동"
                      onClick={handleThird}
                    >
                      4번동
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="button-box">
            <button className="cancelButton" onClick={closeModal}>
              취소
            </button>
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
