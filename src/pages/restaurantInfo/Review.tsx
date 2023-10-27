import styled from 'styled-components';
import infoImg from './info-image.jpg';
import Star from './Star';
const Review = () => {
  return (
    <ReviewLayout>
      <div className="review__header">
        <div className="review__profile">
          <div className="profile__image">
            <img src={infoImg} alt="" />
          </div>
          <div className="profile__info">
            <div className="profile__name">nicknick</div>
            <div className="review__stars">
              <Star score={4} />
            </div>
          </div>
        </div>
        <div className="review__buttons">
          <button></button>
          <button></button>
        </div>
      </div>
      <div className="review__content">
        <div className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          ratione, quo, provident assumenda culpa aspernatur, esse aliquam
          excepturi qui ipsum corporis dolorum vero commodi repudiandae quos in
          dolores ab obcaecati adipisci eveniet porro nostrum. Beatae, ipsam
          harum quos nobis sit molestias dolor, modi, aliquam corrupti
          consequuntur sed! Error, odio amet.
        </div>
        <div className="review__images">
          <img src={infoImg} alt="" />
          <img src={infoImg} alt="" />
          <img src={infoImg} alt="" />
        </div>
      </div>
    </ReviewLayout>
  );
};

export default Review;

const ReviewLayout = styled.div`
  margin: 16px;
  .review__header {
    display: flex;
    justify-content: space-between;
  }
  .review__profile {
    display: flex;
    justify-content: flex-start;
    gap: 1.5rem;
  }
  .profile__image img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .profile__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  .profile__name {
  }

  .review__stars {
  }
  .review__buttons {
  }

  .review__content {
  }
  .review__text {
    font-size: 1.25rem;
  }
  .review__images {
    display: flex;
    justify-content: flex-start;
    margin: 1rem;
    gap: 0.5rem;

    img {
      width: 100px;
      height: 100px;
      cursor: pointer;
    }
    img:hover {
    }
  }
`;
