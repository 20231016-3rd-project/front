import Review from '../../../components/Review/Review';
import { useEffect, useState } from 'react';
import { getMyReviews } from '../../../apis/reviewApi';
const MyReviewsPage = () => {
  const [reviewArray, setReviewArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isReviewEmpty, setIsReviewEmpty] = useState(null);
  useEffect(() => {
    getMyReviews().then((data) => setReviewArray(data));
  }, []);
  return (
    <div>
      {reviewArray.map((review, index) => {
        return (
          <div>
            <div>{review.restaurantName}</div>
            <div>{review.reviewAt}</div>
            <Review key={index} review={review} />
          </div>
        );
      })}
    </div>
  );
};

export default MyReviewsPage;
