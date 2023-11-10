import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import close from '/src/assets/images/close.svg';
import DistrictSelectButton from '../Buttons/DistrictSelectButton';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../store/rootReducer';
import { getRegion } from '../../store/slices/regionSlice';
import { setIsOpen } from '../../store/slices/modalSlice';



const RegionSelect: React.FC = () => {

  
  const dispatch = useDispatch();
  const region = useSelector((state: ReducerType) => state.region.regionInfo);
  const isOpen = useSelector((state: ReducerType) => state.isOpen.isOpen);

  const [first, setFirst] = useState<string>('서울특별시');
  const [second, setSecond] = useState<string>('전체');
  const [third, setThird] = useState<string>('전체');

  const closeModal = () => {
    dispatch(setIsOpen(false))
  };

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
                  <li>
                    <DistrictSelectButton
                      column={second}
                      region="서대문구"
                      onClick={handleSecond}
                      name="서대문구"
                    />
                  </li>
                </>
              )}
            </DistrictList>
            <DistrictListLast>
              {second === '종로구' && (
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
                      region="가회동"
                      onClick={handleThird}
                      name="가회동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="견지동"
                      onClick={handleThird}
                      name="견지동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="경운동"
                      onClick={handleThird}
                      name="경운동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="계동"
                      onClick={handleThird}
                      name="계동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="공평동"
                      onClick={handleThird}
                      name="공평동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="관수동"
                      onClick={handleThird}
                      name="관수동"
                    />
                  </li>{' '}
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="관철동"
                      onClick={handleThird}
                      name="관철동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="관훈동"
                      onClick={handleThird}
                      name="관훈동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="교남동"
                      onClick={handleThird}
                      name="교남동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="교북동"
                      onClick={handleThird}
                      name="교북동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="구기동"
                      onClick={handleThird}
                      name="구기동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="궁정동"
                      onClick={handleThird}
                      name="궁정동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="권농동"
                      onClick={handleThird}
                      name="권농동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="낙원동"
                      onClick={handleThird}
                      name="낙원동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="내수동"
                      onClick={handleThird}
                      name="내수동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="내자동"
                      onClick={handleThird}
                      name="내자동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="누상동"
                      onClick={handleThird}
                      name="누상동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="누하동"
                      onClick={handleThird}
                      name="누하동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="당주동"
                      onClick={handleThird}
                      name="당주동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="도렴동"
                      onClick={handleThird}
                      name="도렴동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="돈의동"
                      onClick={handleThird}
                      name="돈의동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="동숭동"
                      onClick={handleThird}
                      name="동숭동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="명륜동"
                      onClick={handleThird}
                      name="명륜동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="묘동"
                      onClick={handleThird}
                      name="묘동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="무악동"
                      onClick={handleThird}
                      name="무악동"
                    />
                  </li>{' '}
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="봉익동"
                      onClick={handleThird}
                      name="봉익동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="부암동"
                      onClick={handleThird}
                      name="부암동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="사간동"
                      onClick={handleThird}
                      name="사간동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="사직동"
                      onClick={handleThird}
                      name="사직동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="삼청동"
                      onClick={handleThird}
                      name="삼청동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="서린동"
                      onClick={handleThird}
                      name="서린동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="세종로"
                      onClick={handleThird}
                      name="세종로"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="소격동"
                      onClick={handleThird}
                      name="소격동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="송월동"
                      onClick={handleThird}
                      name="송월동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="송현동"
                      onClick={handleThird}
                      name="송현동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="수송동"
                      onClick={handleThird}
                      name="수송동"
                    />
                  </li>{' '}
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="숭인동"
                      onClick={handleThird}
                      name="숭인동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="신교동"
                      onClick={handleThird}
                      name="신교동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="신문로"
                      onClick={handleThird}
                      name="신문로"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="신영동"
                      onClick={handleThird}
                      name="신영동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="안국동"
                      onClick={handleThird}
                      name="안국동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="연건동"
                      onClick={handleThird}
                      name="연건동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="연지동"
                      onClick={handleThird}
                      name="연지동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="예지동"
                      onClick={handleThird}
                      name="예지동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="옥인동"
                      onClick={handleThird}
                      name="옥인동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="와룡동"
                      onClick={handleThird}
                      name="와룡동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="운니동"
                      onClick={handleThird}
                      name="운니동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="원남동"
                      onClick={handleThird}
                      name="원남동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="원서동"
                      onClick={handleThird}
                      name="원서동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="이화동"
                      onClick={handleThird}
                      name="이화동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="익선동"
                      onClick={handleThird}
                      name="익선동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="인사동"
                      onClick={handleThird}
                      name="인사동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="인의동"
                      onClick={handleThird}
                      name="인의동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="장사동"
                      onClick={handleThird}
                      name="장사동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="재동"
                      onClick={handleThird}
                      name="재동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="적선동"
                      onClick={handleThird}
                      name="적선동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="중학동"
                      onClick={handleThird}
                      name="중학동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="창성동"
                      onClick={handleThird}
                      name="창성동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="창신동"
                      onClick={handleThird}
                      name="창신동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="청운동"
                      onClick={handleThird}
                      name="청운동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="체부동"
                      onClick={handleThird}
                      name="체부동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="충신동"
                      onClick={handleThird}
                      name="충신동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="통의동"
                      onClick={handleThird}
                      name="통의동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="통인동"
                      onClick={handleThird}
                      name="통인동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="팔판동"
                      onClick={handleThird}
                      name="팔판동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="평동"
                      onClick={handleThird}
                      name="평동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="평창동"
                      onClick={handleThird}
                      name="평창동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="필운동"
                      onClick={handleThird}
                      name="필운동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="행촌동"
                      onClick={handleThird}
                      name="행촌동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="혜화동"
                      onClick={handleThird}
                      name="혜화동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="홍지동"
                      onClick={handleThird}
                      name="홍지동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="화동"
                      onClick={handleThird}
                      name="화동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="효자동"
                      onClick={handleThird}
                      name="효자동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="효제동"
                      onClick={handleThird}
                      name="효제동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="훈정동"
                      onClick={handleThird}
                      name="훈정동"
                    />
                  </li>
                </>
              )}
              {second === '마포구' && (
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
                      region="공덕동"
                      onClick={handleThird}
                      name="공덕동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="구수동"
                      onClick={handleThird}
                      name="구수동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="노고산동"
                      onClick={handleThird}
                      name="노고산동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="당인동"
                      onClick={handleThird}
                      name="당인동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="대흥동"
                      onClick={handleThird}
                      name="대흥동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="도화동"
                      onClick={handleThird}
                      name="도화동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="동교동"
                      onClick={handleThird}
                      name="동교동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="마포동"
                      onClick={handleThird}
                      name="마포동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="상수동"
                      onClick={handleThird}
                      name="상수동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="상암동"
                      onClick={handleThird}
                      name="상암동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="서교동"
                      onClick={handleThird}
                      name="서교동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="성산동"
                      onClick={handleThird}
                      name="성산동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="신공덕동"
                      onClick={handleThird}
                      name="신공덕동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="신수동"
                      onClick={handleThird}
                      name="신수동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="신정동"
                      onClick={handleThird}
                      name="신정동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="신촌동"
                      onClick={handleThird}
                      name="신촌동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="아현동"
                      onClick={handleThird}
                      name="아현동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="연남동"
                      onClick={handleThird}
                      name="연남동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="염리동"
                      onClick={handleThird}
                      name="염리동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="용강동"
                      onClick={handleThird}
                      name="용강동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="중동"
                      onClick={handleThird}
                      name="중동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="창전동"
                      onClick={handleThird}
                      name="창전동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="청파동"
                      onClick={handleThird}
                      name="청파동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="토정동"
                      onClick={handleThird}
                      name="토정동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="하중동"
                      onClick={handleThird}
                      name="하중동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="합정동"
                      onClick={handleThird}
                      name="합정동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="현석동"
                      onClick={handleThird}
                      name="현석동"
                    />
                  </li>
                </>
              )}
              {second === '중구' && (
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
                      region="광희동"
                      onClick={handleThird}
                      name="광희동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="남대문로"
                      onClick={handleThird}
                      name="남대문로"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="남산동"
                      onClick={handleThird}
                      name="남산동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="남창동"
                      onClick={handleThird}
                      name="남창동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="남학동"
                      onClick={handleThird}
                      name="남학동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="다동"
                      onClick={handleThird}
                      name="다동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="다산동"
                      onClick={handleThird}
                      name="다산동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="동화동"
                      onClick={handleThird}
                      name="동화동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="만리동"
                      onClick={handleThird}
                      name="만리동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="명동"
                      onClick={handleThird}
                      name="명동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="무교동"
                      onClick={handleThird}
                      name="무교동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="무학동"
                      onClick={handleThird}
                      name="무학동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="묵정동"
                      onClick={handleThird}
                      name="묵정동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="방산동"
                      onClick={handleThird}
                      name="방산동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="봉래동"
                      onClick={handleThird}
                      name="봉래동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="북창동"
                      onClick={handleThird}
                      name="북창동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="산림동"
                      onClick={handleThird}
                      name="산림동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="삼각동"
                      onClick={handleThird}
                      name="삼각동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="서소문동"
                      onClick={handleThird}
                      name="서소문동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="소공동"
                      onClick={handleThird}
                      name="소공동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="수표동"
                      onClick={handleThird}
                      name="수표동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="수하동"
                      onClick={handleThird}
                      name="수하동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="순화동"
                      onClick={handleThird}
                      name="순화동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="신당동"
                      onClick={handleThird}
                      name="신당동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="쌍림동"
                      onClick={handleThird}
                      name="쌍림동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="약수동"
                      onClick={handleThird}
                      name="약수동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="예관동"
                      onClick={handleThird}
                      name="예관동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="예장동"
                      onClick={handleThird}
                      name="예장동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="오장동"
                      onClick={handleThird}
                      name="오장동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="을지로"
                      onClick={handleThird}
                      name="을지로"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="의주로"
                      onClick={handleThird}
                      name="의주로"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="인현동"
                      onClick={handleThird}
                      name="인현동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="입정동"
                      onClick={handleThird}
                      name="입정동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="장교동"
                      onClick={handleThird}
                      name="장교동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="장충동"
                      onClick={handleThird}
                      name="장충동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="저동"
                      onClick={handleThird}
                      name="저동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="정동"
                      onClick={handleThird}
                      name="정동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="주교동"
                      onClick={handleThird}
                      name="주교동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="주자동"
                      onClick={handleThird}
                      name="주자동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="중림동"
                      onClick={handleThird}
                      name="중림동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="청구동"
                      onClick={handleThird}
                      name="청구동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="초동"
                      onClick={handleThird}
                      name="초동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="충무로"
                      onClick={handleThird}
                      name="충무로"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="충정동"
                      onClick={handleThird}
                      name="충정동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="태평로"
                      onClick={handleThird}
                      name="태평로"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="필동"
                      onClick={handleThird}
                      name="필동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="황학동"
                      onClick={handleThird}
                      name="황학동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="회현동"
                      onClick={handleThird}
                      name="회현동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="흥인동"
                      onClick={handleThird}
                      name="흥인동"
                    />
                  </li>
                </>
              )}
              {second === '서대문구' && (
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
                      region="남가좌동"
                      onClick={handleThird}
                      name="남가좌동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="냉천동"
                      onClick={handleThird}
                      name="냉천동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="대신동"
                      onClick={handleThird}
                      name="대신동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="대현동"
                      onClick={handleThird}
                      name="대현동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="미근동"
                      onClick={handleThird}
                      name="미근동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="봉원동"
                      onClick={handleThird}
                      name="봉원동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="북가좌동"
                      onClick={handleThird}
                      name="북가좌동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="북아현동"
                      onClick={handleThird}
                      name="북아현동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="신촌동"
                      onClick={handleThird}
                      name="신촌동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="아현동"
                      onClick={handleThird}
                      name="아현동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="연남동"
                      onClick={handleThird}
                      name="연남동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="염리동"
                      onClick={handleThird}
                      name="염리동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="용강동"
                      onClick={handleThird}
                      name="용강동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="중동"
                      onClick={handleThird}
                      name="중동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="창전동"
                      onClick={handleThird}
                      name="창전동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="청파동"
                      onClick={handleThird}
                      name="청파동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="토정동"
                      onClick={handleThird}
                      name="토정동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="하중동"
                      onClick={handleThird}
                      name="하중동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="합정동"
                      onClick={handleThird}
                      name="합정동"
                    />
                  </li>
                  <li>
                    <DistrictSelectButton
                      column={third}
                      region="현석동"
                      onClick={handleThird}
                      name="현석동"
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
  height: 60vh;
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
  height: 48px;
`;
const DistrictListBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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

  &:active {
    transform: scale(0.95); // 버튼이 눌렸을 때 약간 축소
  }
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
