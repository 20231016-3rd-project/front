import React, { useCallback, useRef } from 'react';
import './Slide.css';
import arrowLeft from '/src/assets/images/arrowLeft.svg';
import arrowRight from '/src/assets/images/arrowRight.svg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

import {Best} from "../../model/best"

interface OwnProps {
  datas:Best
}

const Slide:React.FC<OwnProps> = ({datas}) => {
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

  const data = datas;

  const renderData = (data) => {
    return (
      <li className="data-list" key={Math.random()}>
        <div className="contents">
          <div className="imgdiv">
            <img className="data-img" src={data.img} alt="" />
          </div>
          <p className="data-text">{data.text}</p>
        </div>
      </li>
    );
  };
  return (
    <div className="carousel">
      <Product>
        <Slider {...settings} ref={slickRef}>
          {data.map(renderData)}
        </Slider>
      </Product>
      <div className="arrow-div">
        <div className="prev" onClick={previous}>
          <img className="arrow-left" src={arrowLeft} alt={'pre-arrow'} />
        </div>
        <div className="next" onClick={next}>
          <img className="arrow-right" src={arrowRight} alt={'next-arrow'} />
        </div>
      </div>
    </div>
  );
};

export default Slide;

const Product = styled.div`
  width: 90%;
  position: relative;
  img {
    width: 100%;
  }

  .slick-slider .slick-list {
    height: 100%;
    width: 100%;
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
