import { useState, useEffect } from 'react';
import logo from '/src/assets/images/sunflower.png';
import arrowDown from '/src/assets/images/arrowDown.svg';

import ramen from '/src/assets/images/ramen.jpg';
import bibimbap from '/src/assets/images/bibimbap.jpg';
import pasta from '/src/assets/images/pasta.jpg';
import tart from '/src/assets/images/tart.jpg';
import dbk from '/src/assets/images/dbk.jpg';
import pizza from '/src/assets/images/pizza.jpg';
import background from '/src/assets/images/background.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { css, keyframes } from 'styled-components';

import Slide from '../../components/Slide/Slide';

import { Bests } from '../../model/best';
import DetialPage from './DetialPage';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../store/rootReducer';
import { setIsOpen } from '../../store/slices/modalSlice';
import { setKey, setKeyword } from '../../store/slices/keywordSlice';

interface IsClicked {
  $clicked: boolean; // prefix 로 "$" 를 사용하게 되면, props 가 실제 DOM 요소에 전달되는 것을 막는다.
}

const Main = () => {
  const dispatch = useDispatch();

  const region = useSelector((state: ReducerType) => state.region.regionInfo);

  const openModalHandler = () => {
    dispatch(setIsOpen(true));
  };

  const datas: Bests = [
    { id: 1, text: '떡볶이 맛집 베스트 10', img: dbk, key: '떡볶이' },
    { id: 2, text: '라멘 맛집 베스트 10', img: ramen, key: '라멘' },
    { id: 3, text: '피자 맛집 베스트 10', img: pizza, key: '피자' },
    { id: 4, text: '파스타 맛집 베스트 10', img: pasta, key: '파스타' },
    { id: 5, text: '홍대연남 맛집 베스트 10', img: tart, key: '홍대연남' },
    { id: 6, text: '신촌이대 맛집 베스트 10', img: bibimbap, key: '신촌이대' },
  ];

  //첫 화면 cover 관리
  const [clicked, setClicked] = useState(false); // 커버에 애니메이션 주기
  let cover = true;
  let initial = true;
  const handleCover = () => {
    setClicked(true);
    sessionStorage.setItem('initial', 'false');
    setTimeout(() => {
      sessionStorage.setItem('cover', 'false');
    }, 500);
  };
  if (sessionStorage.getItem('initial')) {
    initial = false;
  }
  if (sessionStorage.getItem('cover')) {
    cover = false;
  }

  let city = '서울';
  let district;
  let dong;

  if (region.city === '서울특별시') {
    city = '서울';
  }
  if (region.district === '전체') {
    district = '';
  } else {
    district = region.district;
  }
  if (region.dong === '전체') {
    dong = '';
  } else {
    dong = region.dong;
  }

  useEffect(() => {
    dispatch(setKeyword(''));
    dispatch(setKey(''));
  }, []);

  return (
    <main>
      {cover && (
        <Cover $clicked={clicked}>
          <CoverTitle>
            <img src={logo} alt="" />
            <Text1>지금바로 떠나는 맛집 탐방!</Text1>
            <Text2>해바라기 플레이트</Text2>
          </CoverTitle>
          <ArrowDown onClick={handleCover}>
            <ArrowDownImg src={arrowDown} alt="" />
          </ArrowDown>
        </Cover>
      )}

      {(clicked || initial === false) && (
        <>
          <SelectRegion>
            <p>당신을 위한 지역별</p>
            <p>추천 맛집</p>
            <SelectRegionButton onClick={openModalHandler}>
              지역선택
            </SelectRegionButton>
          </SelectRegion>
          <Section>
            <SectionTitle>믿고 보는 맛집 리스트</SectionTitle>
            <Slide datas={datas} />
          </Section>
          <SectionTitle2>
            {city} {district} {dong} 맛집
          </SectionTitle2>
          <DetialPage />
        </>
      )}
    </main>
  );
};

export default Main;

const fadeOutUp = keyframes`
0% {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}
100% {
  visibility: hidden;
  opacity: 0;
  transform: translateY(-93.5vh);
}
`;

const Cover = styled.div<IsClicked>`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 93.5vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${background}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  animation-name: ${(props) =>
    props.$clicked
      ? css`
          ${fadeOutUp}
        `
      : ''};
`;
const CoverTitle = styled.div`
  color: white;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  line-height: 60px;
`;
const Text1 = styled.p`
  letter-spacing: 2px;
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;
const ArrowDown = styled.div`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 60px;
`;
const ArrowDownImg = styled.img`
  width: 90%;
  height: 90%;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(242deg)
    brightness(103%) contrast(101%);
    animation: ${bounce} 1s infinite; 
`;
const SelectRegion = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${background}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: 600;
  padding-top: 5rem;
  line-height: 60px;
`;
const SelectRegionButton = styled.button`
  background-color: #da9d00;
  color: white;
  font-size: 32px;
  font-weight: 600;
  border: none;
  border-radius: 68px;
  padding: 1.1rem 5rem;
  margin: 2rem 0 4rem 0;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: pointer;
`;
const Text2 = styled.p`
  letter-spacing: 5px;
  margin-bottom: 10px;
`;

const Section = styled.div`
  padding: 40px 0;
`;
const SectionTitle = styled.div`
  color: #ff792a;
  font-size: 32px;
  font-weight: 600;
  margin: 0 100px;
  padding: 0 0 40px 0;
`;
const SectionTitle2 = styled.div`
  color: #ff792a;
  font-size: 32px;
  font-weight: 600;
  margin: 0 15%;
`;
