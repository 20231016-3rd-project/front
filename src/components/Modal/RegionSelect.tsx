import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import close from '/src/assets/images/close.svg';
import DistrictSelectButton from '../Buttons/DistrictSelectButton';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../store/rootReducer';
import { getRegion } from '../../store/slices/regionSlice';

interface OwnProps {
  closeModal?: () => void;
}

const RegionSelect: React.FC<OwnProps> = ({ closeModal }) => {
  const dispatch = useDispatch();
  const region = useSelector((state: ReducerType) => state.region.regionInfo);

  const [first, setFirst] = useState<string>('서울특별시');
  const [second, setSecond] = useState<string>('전체');
  const [third, setThird] = useState<string>('전체');

  const handleFirst = (e) => {
    setFirst(e.target.value);
    setSecond('전체');
    setThird('전체');
  };
  const handleSecond = (e) => {
    setSecond(e.target.value);
    setThird('전체');
  };
  const handleThird = (e) => {
    setThird(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(getRegion({ city: first, district: second, dong: third }));
    closeModal && closeModal();
  };

  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={closeModal} />,
        document.getElementById('backdrop-root') as HTMLElement
      )}

      {ReactDOM.createPortal(
        <ModalBox>
          <LocationHeader>지역 선택</LocationHeader>
          <LocationDistrict>
            <DistrictTitle>광역시도</DistrictTitle>
            <DistrictTitle>시군구</DistrictTitle>
            <DistrictTitle>읍면동</DistrictTitle>
          </LocationDistrict>
          <DistrictListBox>
            <DistrictList>
              <li>
                <DistrictSelectButton
                  column={first}
                  region="서울"
                  onClick={handleFirst}
                  name="서울특별시"
                />
              </li>
            </DistrictList>

            <DistrictList>
              <li>
                <DistrictSelectButton
                  column={second}
                  region="전체"
                  onClick={handleSecond}
                  name="전체"
                />
              </li>
              {first === '서울특별시' && (
                <>
                  <li>
                    <DistrictSelectButton
                      column={second}
                      region="종로구"
                      onClick={handleSecond}
                      name="종로구"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={second}
                      region="마포구"
                      onClick={handleSecond}
                      name="마포구"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={second}
                      region="중구"
                      onClick={handleSecond}
                      name="중구"
                    />
                  </li>
                </>
              )}
            </DistrictList>
            <DistrictListLast>
              {second != '전체' && (
                <>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="전체"
                      onClick={handleThird}
                      name="전체"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="1번동"
                      onClick={handleThird}
                      name="1번동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="2번동"
                      onClick={handleThird}
                      name="2번동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="3번동"
                      onClick={handleThird}
                      name="3번동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="4번동"
                      onClick={handleThird}
                      name="4번동"
                    />
                  </li>
                </>
              )}
            </DistrictListLast>
          </DistrictListBox>
          <ButtonBox>
            <CancelButton onClick={closeModal}>취소</CancelButton>
            <SubmitButton onClick={handleSubmit}>선택 완료</SubmitButton>
          </ButtonBox>

          <CloseButton onClick={closeModal}>
            <CloseImg src={close} alt="" />
          </CloseButton>
        </ModalBox>,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
};

export default RegionSelect;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;
const ModalBox = styled.div`
  width: 35rem;
  border: 1px solid black;
  border-radius: 16px;
  position: fixed;
  top: 18vh;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 100;
  overflow: hidden;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 29px;
  width: 604px;
  height: 30vh;
  max-height: 843px;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const LocationHeader = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: -0.0688rem;
`;
const LocationDistrict = styled.div`
  display: flex;

  width: 100%;
  height: 45px;
  border-style: solid;
  border-width: 2px 1px 1px;
  border-color: #daa710 rgb(234, 234, 234) rgb(234, 234, 234);

  margin-top: 25px;
`;
const DistrictTitle = styled.div`
  width: 192px;
  display: flex;
  align-items: center;
  font-weight: 500;
  padding-left: 21px;
`;
const DistrictListBox = styled.div`
  display: flex;
  width: 100%;
  overflow-y: hidden;
  border-left: 1px solid rgb(234, 234, 234);
  border-right: 1px solid rgb(234, 234, 234);
  border-bottom: 1px solid rgb(234, 234, 234);
`;
const DistrictList = styled.ul`
  width: 192px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;
  border-right: 1px solid rgb(234, 234, 234);
  padding: 5px 7px;

  min-height: 225px;
`;
const DistrictListLast = styled.ul`
  width: 192px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;
  padding: 5px 7px;
`;
const ButtonBox = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  padding-top: 21px;
`;
const CancelButton = styled.button`
  border: 1px solid rgb(196, 196, 196);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 42px;
  /* transition: all 0.3s ease-in-out 0s; */
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;

  color: rgb(196, 196, 196);
  font-weight: 600;
`;
const SubmitButton = styled.button`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 42px;
  /* transition: all 0.3s ease-in-out 0s; */
  border-radius: 6px;
  border: 1px solid #ffc20e;
  background-color: transparent;
  cursor: pointer;

  color: #ffc20e;
  font-weight: 600;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
`;
const CloseImg = styled.img`
  width: 28px;
  height: 28px;
`;
