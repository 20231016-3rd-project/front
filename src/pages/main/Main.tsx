import React, { useCallback, useRef } from 'react';
import './Main.css';
import korean from '/src/assets/images/korean.jpg';
import noodle from '/src/assets/images/noodle.jpg';
import ramen from '/src/assets/images/ramen.jpg';
import bibimbap from '/src/assets/images/bibimbap.jpg';
import pasta from '/src/assets/images/pasta.jpg';
import tart from '/src/assets/images/tart.jpg';
import arrowLeft from '/src/assets/images/arrowLeft.svg';
import arrowRight from '/src/assets/images/arrowRight.svg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const Main = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const slickRef = useRef(null);

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  const data = [
    { id: 1, text: '얼큰한 칼국수 맛집 베스트 20곳', img: noodle },
    { id: 2, text: '일본 라멘 맛집 베스트 70곳', img: ramen },
    { id: 3, text: '한식 주점 베스트 30곳', img: korean },
    { id: 4, text: '타르트 맛집 베스트 35곳', img: tart },
    { id: 5, text: '파스타 맛집 베스트 10곳', img: pasta },
    { id: 6, text: '비빔밥 맛집 베스트 45곳', img: bibimbap },
  ];
  const renderImgs = (data) => {
    return (
      <li className="data-list" key={Math.random()}>
        <div className="imgdiv">
          <img className="data-img" src={data.img} alt="" />
        </div>
        <p className="data-text">{data.text}</p>
      </li>
    );
  };

  return (
    <main>
      <div className="select-region">
        <p>당신을 위한 지역별</p>
        <p>추천 맛집</p>
        <button className="select-btn">지역선택</button>
      </div>
      <div className="carousel">
        <ProductImg>
          <Slider {...settings} ref={slickRef}>
            {data.map(renderImgs)}
          </Slider>
        </ProductImg>
        <div className="arrow-div">
          <div className="prev" onClick={previous}>
            <img className="arrow-left" src={arrowLeft} alt={'pre-arrow'} />
          </div>
          <div className="next" onClick={next}>
            <img className="arrow-right" src={arrowRight} alt={'next-arrow'} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

const ProductImg = styled.div`
  width: 90%;
  position: relative;
  img {
    width: 100%;
  }

  .slick-slider .slick-list {
    height: 100%;
  }
  .slick-slider .slick-track {
    height: 100%;
  }

  .slick-slide img {
    width: 100%;
    height: 100%;
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;
    position: absolute;
  }

  .slick-dots li {
    width: auto;
    height: auto;
  }

  .slick-dots li button {
    width: auto;
    height: auto;
  }

  .slick-dots li button:before {
    width: auto;
    height: auto;
    background-size: auto;
    font-size: 15px;
    opacity: 0.35;
  }

  .slick-dots li.slick-active button:before {
    color: #f9b916;
    opacity: 0.95;
  }
`;
