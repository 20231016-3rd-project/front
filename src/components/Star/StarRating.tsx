import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import styled from 'styled-components';

const StarRating: React.FC = () => {
  const [hover, setHover] = useState<number | null>(null);
  const [rating, setRating] = useState<number | null>(null);

  //star setting  객체로 모아둘까?
  const star = {
    size: 30,
    color: { filled: '#ffc107', empty: '#e4e5e9' },
    setStarColor: function (
      hover: number | null,
      rating: number | null,
      currentRating: number
    ): string {
      // flag말고 다른 이름 뭐가 있을까.
      let flag: number | null = hover || rating;
      if (flag === null) {
        return this.color.empty;
      } else {
        return currentRating <= flag ? this.color.filled : this.color.empty;
      }

      // if (hover === null && rating === null) {
      //   return this.color.empty;
      // } else if (currentRating <= (hover || rating)) {
      //   return this.color.empty;
      // }
      // return this.color.filled;
    },
  };
  console.log(rating);
  return (
    <StarRatingStyle>
      {[...Array(5)].map((element, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              className="rating__radio"
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar
              className="rating__star"
              size={star.size}
              // color={star.setStarColor(hover, rating, currentRating)}
              color={currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </StarRatingStyle>
  );
};

export default StarRating;

const StarRatingStyle = styled.div`
  .rating__radio {
    display: none;
  }
  .rating__star {
    cursor: pointer;
  }
`;

/*
리팩토링 아이디어
1. 하나의 객체에 모아둔다. 추상화
2. 아이템31 타입주변에 null값을 배치하기
-> 함수의 구조 변경.
*/
