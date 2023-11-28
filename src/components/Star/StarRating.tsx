import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import styled from 'styled-components';

const star = {
  size: 30,
  color: { filled: '#f9b916', empty: '#e4e5e9' },
};
interface StarRatingProps {
  rating: number | null;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
}
const StarRating: React.FC<StarRatingProps> = ({ rating, setRating }) => {
  const [hover, setHover] = useState<number | null>(null);

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
              onClick={() => {
                setRating(currentRating);
                console.log('starstar');
              }}
            />
            <FaStar
              className="rating__star"
              size={star.size}
              color={
                currentRating <= ((hover || rating) ?? 0)
                  ? star.color.filled
                  : star.color.empty
              }
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
  display: flex;
  .rating__radio {
    display: none;
  }
  .rating__star {
    cursor: pointer;
  }
  z-index: 10;
`;

/*
리팩토링 아이디어
1. 하나의 객체에 모아둔다. 추상화
2. 아이템31 타입주변에 null값을 배치하기
-> 함수의 구조 변경.
*/
