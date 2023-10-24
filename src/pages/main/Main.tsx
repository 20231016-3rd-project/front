import React from 'react';
import './Main.css';
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
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';

import { Best, Restaurant } from '../../model/best';


const Main = () => {
  const datas: Best = [
    { id: 1, text: '얼큰한 칼국수 맛집 베스트 20곳', img: noodle },
    { id: 2, text: '일본 라멘 맛집 베스트 70곳', img: ramen },
    { id: 3, text: '한식 주점 베스트 30곳', img: korean },
    { id: 4, text: '타르트 맛집 베스트 35곳', img: tart },
    { id: 5, text: '파스타 맛집 베스트 10곳', img: pasta },
    { id: 6, text: '비빔밥 맛집 베스트 45곳', img: bibimbap },
  ];

  const retaurantData: Restaurant = [
    {
      id: 1,
      name: '너무너무 맛있는 햄토리네 견과류',
      text1: '홍대! 견과류, 동결건조 과일',
      text2: '서울특별시 마포구 햄토리네마을',
      text3: 'https://www.instagram.com',
      img: noodle,
    },
    {
      id: 2,
      name: '햄토리네 해바라기',
      text1: '햄햄',
      text2: '마포구 햄토리네마을',
      text3: 'https://www.instagram.com',
      img: ramen,
    },
  ];

  return (
    <main>
      <div className="select-region">
        <p>당신을 위한 지역별</p>
        <p>추천 맛집</p>
        <button className="select-btn">지역선택</button>
      </div>
      <section className="section">
        <div className="section-title">믿고 보는 맛집 리스트</div>
        <Slide datas={datas} />
      </section>

      <section className="subpage">
        <ul>
        <RestaurantCard datas={retaurantData}/>
        </ul>
      </section>
    </main>
  );
};

export default Main;