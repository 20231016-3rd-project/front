import { useQuery, useMutation } from '@tanstack/react-query';
import { getRestaurantDetail } from '../apis/getRestaurantApi/getRestaurant';
import { postReview } from '../apis/reviewApi';

export const getRestaurantDetailQuery = (id: string) => {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const data = await getRestaurantDetail(id).then();
      return data;
    },
    queryKey: ['review'],
  });
  return { data, isLoading };
};

export const postReviewMutation = () => {
  const { mutate, isError, isLoading } = useMutation({
    mutationFn: async ({ restaurantId, formData }) => {
      console.log('무테', restaurantId, formData);
      postReview(restaurantId, formData);
    },
    mutationKey: ['review'],
  });
  return { mutate, isError, isLoading };
};
