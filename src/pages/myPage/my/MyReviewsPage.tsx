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
      <SectionTitle2>나의 리뷰 목록</SectionTitle2>
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
  padding: 80px 15% 20px;
`;

const SectionTitle2 = styled.div`
  color: #ff792a;
  font-size: 32px;
  font-weight: 600;
  margin: 1rem;
`;

