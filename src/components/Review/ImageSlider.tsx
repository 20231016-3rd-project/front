import { Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ImageSlider {
  slides: any;
}

const ImageSlider: React.FC<ImageSlider> = ({ slides }) => {
  return (
    <Carousel infiniteLoop>
      {slides.map((slide: any) => {
        return (
          <Image
            src={slide.reviewResizeUrl}
            maxH={'550px'}
            width={'100%'}
            borderRadius={'md'}
          />
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
