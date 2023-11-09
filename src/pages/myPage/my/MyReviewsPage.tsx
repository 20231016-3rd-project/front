import Review from '../../../components/Review/Review';
import { useEffect, useState } from 'react';
import { getMyReviews } from '../../../apis/reviewApi';
import styled from 'styled-components';
const MyReviewsPage = () => {
  const [reviewArray, setReviewArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isReviewEmpty, setIsReviewEmpty] = useState(null);
  useEffect(() => {
    getMyReviews().then((data) => setReviewArray(data));
  }, []);
  return (
    <MyReviewStyle>
      {reviewArray.map((review, index) => {
        return (
          <div>
            <div>{review.restaurantName}</div>
            <div>{review.reviewAt}</div>
            <Review key={index} review={review} />
          </div>
        );
      })}
    </MyReviewStyle>
  );
};

export default MyReviewsPage;

const MyReviewStyle = styled.div`
  margin: 5rem;
`;
