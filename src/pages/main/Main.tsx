import React, { useRef, useState } from 'react';
import './Main.css';
import logo from '/src/assets/images/sunflower.png';
import arrowDown from '/src/assets/images/arrowDown.svg';

import korean from '/src/assets/images/korean.jpg';
import noodle from '/src/assets/images/noodle.jpg';
import ramen from '/src/assets/images/ramen.jpg';
import bibimbap from '/src/assets/images/bibimbap.jpg';
import pasta from '/src/assets/images/pasta.jpg';
import tart from '/src/assets/images/tart.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

import Slide from '../../components/Slide/Slide';

import { Bests } from '../../model/best';
import RegionSelect from '../../components/Modal/RegionSelect';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const datas: Bests = [
    { id: 1, text: '얼큰한 칼국수 맛집 베스트 20곳', img: noodle },
    { id: 2, text: '일본 라멘 맛집 베스트 70곳', img: ramen },
    { id: 3, text: '한식 주점 베스트 30곳', img: korean },
    { id: 4, text: '타르트 맛집 베스트 35곳', img: tart },
    { id: 5, text: '파스타 맛집 베스트 10곳', img: pasta },
    { id: 6, text: '비빔밥 맛집 베스트 45곳', img: bibimbap },
  ];

  //첫 화면 overlay 관리
  const [clicked, setClicked] = useState(false);
  const coverRef = useRef(null);
  const handleOverlay = () => {
    if (coverRef.current) {
      coverRef.current.className = 'cover fadeOutUp';
    }
    setClicked(true);
  };

  return (
    <main>
      <div className="cover" ref={coverRef}>
        <CoverTitle>
          <img src={logo} alt="" />
          <Text1>지금바로 떠나는 맛집 탐방!</Text1>
          <Text2>해바라기 플레이트</Text2>
        </CoverTitle>
        <ArrowDown onClick={handleOverlay}>
          <ArrowDownImg src={arrowDown} alt="" />
        </ArrowDown>
      </div>

      {isOpen && <RegionSelect closeModal={closeModal} />}

      {clicked && (
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
        </>
      )}
    </main>
  );
};

export default Main;

// const Cover = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: absolute;
//   width: 100%;
//   height: 93.5vh;
//   background-image: url('src/assets/images/background.jpg');
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   z-index: 999;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   animation-duration: 1s;
//   animation-fill-mode: forwards;
// `;
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
const ArrowDown = styled.div`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 60px;
`;
const ArrowDownImg = styled.img`
  width: 100%;
  height: 100%;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(242deg)
    brightness(103%) contrast(101%);
`;
const SelectRegion = styled.div`
  background-color: #fcd19c;
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
