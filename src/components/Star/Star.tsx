import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import styled from 'styled-components';

interface StarProps {
  score: number;
}

const Star: React.FC<StarProps> = ({ score }) => {
  const maxScore = 5;
  const restScore = maxScore - score;

  const scoreArray = Array.from({ length: score }, () => true);
  const emptyScoreArray = Array.from({ length: restScore }, () => false);
  const starArray = [...scoreArray, ...emptyScoreArray];

  //star setting
  const starSize = 12;
  const starColor = { filled: '#ffc107', empty: '#e4e5e9' };
  return (
    <StarStyle>
      {starArray.map((isScore, index) => {
        return (
          <FaStar
            key={index}
            className="rating__star"
            size={starSize}
            color={isScore ? starColor.filled : starColor.empty}
          />
        );
      })}
    </StarStyle>
  );
};

export default Star;
const StarStyle = styled.div`
  display: flex;
`;
