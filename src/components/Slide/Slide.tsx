import React, { useCallback, useRef } from 'react';
import arrowLeft from '/src/assets/images/arrowLeft.svg';
import arrowRight from '/src/assets/images/arrowRight.svg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

import { Best, Bests } from '../../model/best';
import { Link } from 'react-router-dom';

interface OwnProps {
  datas: Bests;
}

const Slide: React.FC<OwnProps> = ({ datas }) => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const slickRef = useRef<Slider | null>(null);

  const previous = useCallback(() => slickRef.current?.slickPrev(), []);
  const next = useCallback(() => slickRef.current?.slickNext(), []);

  const data = datas;

  const renderData = (data: Best) => {
    return (
      <DataList key={Math.random()}>
        <Contents to="/bestpage" state={{key:data.key}}>
          <ImgDiv>
            <DataImg src={data.img} alt="" />
          </ImgDiv>
          <DataText>{data.text}</DataText>
        </Contents>
      </DataList>
    );
  };
  return (
    <Carousel>
      <Product>
        <Slider {...settings} ref={slickRef}>
          {data.map(renderData)}
        </Slider>
      </Product>
      <ArrowDiv>
        <Prev onClick={previous}>
          <ArrowImg src={arrowLeft} alt={'pre-arrow'} />
        </Prev>
        <Next onClick={next}>
          <ArrowImg src={arrowRight} alt={'next-arrow'} />
        </Next>
      </ArrowDiv>
    </Carousel>
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
const DataList = styled.li`
  position: relative;
  display: flex !important;
  justify-content: center;
`;
const Contents = styled(Link)`
  width: 90%;
  cursor: pointer;
`;
const ImgDiv = styled.div`
  width: 100%;
  height: 18.75rem;
`;
const DataImg = styled.img`
  object-fit: cover;
`;
const DataText = styled.p`
  width: 90%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  color: white;
  text-shadow: 6px 6px 16px rgba(0, 0, 0, 0.9);
  z-index: 10;
`;
const Carousel = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 3rem;
`;
const ArrowDiv = styled.div`
  display: flex;
`;
const Prev = styled.div`
  height: 43px;
  position: absolute;
  top: 50%;
  left: 1%;
`;
const Next = styled.div`
  height: 43px;
  position: absolute;
  top: 50%;
  right: 1%;
`;
const ArrowImg = styled.img`
  height: 43px;
  cursor: pointer;
`;
