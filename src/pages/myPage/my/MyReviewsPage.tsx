import { useEffect, useState } from 'react';
import { getMyReviews } from '../../../apis/reviewApi';
import styled from 'styled-components';
import MyReview from './MyReview';
const MyReviewsPage = () => {
  const [reviewArray, setReviewArray] = useState([]);
  const [reviewChangeTrigger, setReviewChangeTrigger] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isReviewEmpty, setIsReviewEmpty] = useState(null);
  useEffect(() => {
    getMyReviews().then((data) => setReviewArray(data));
  }, [reviewChangeTrigger]);
  return (
    <MyReviewStyle>
      {reviewArray.map((review, index) => {
        return (
          <div>
            <MyReview
              key={index}
              review={review}
              reviewRefresh={setReviewChangeTrigger}
            />
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
