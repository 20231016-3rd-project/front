import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ViewImage = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.dir(settings);
  return <div>ViewImage</div>;
};

export default ViewImage;
