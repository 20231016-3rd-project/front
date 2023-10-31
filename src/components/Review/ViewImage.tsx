import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import arrowLeft from '/src/assets/images/arrowLeft.svg';
import arrowRight from '/src/assets/images/arrowRight.svg';
const ViewImage = ({ images }) => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return <div>ViewImage</div>;
};

export default ViewImage;
