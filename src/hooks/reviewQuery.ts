import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getRestaurantDetail } from '../apis/getRestaurantApi/getRestaurant';
import { deleteReview, postReview, putReview } from '../apis/reviewApi';

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
  const queryClient = useQueryClient();
  const { mutate, isError, isLoading } = useMutation({
    mutationFn: async ({ restaurantId, formData }) => {
      try {
        await postReview(restaurantId, formData);
        queryClient.invalidateQueries({ queryKey: ['review'] });
      } catch (error) {
        console.log(error);
      }
    },
    mutationKey: ['review'],
  });
  return { mutate, isError, isLoading };
};

export const deleteReviewMutation = () => {
  const queryClient = useQueryClient();
  const { mutate, isError, isLoading } = useMutation({
    mutationFn: async (reviewId) => {
      try {
        await deleteReview(reviewId);
        queryClient.invalidateQueries({ queryKey: ['review'] });
      } catch (error) {
        console.log(error);
      }
    },
    mutationKey: ['review'],
  });
  return { mutate, isError, isLoading };
};

export const putReviewMutation = () => {
  const queryClient = useQueryClient();
  const { mutate, isError, isLoading } = useMutation({
    mutationFn: async ({ restaurantId, formData }) => {
      try {
        await putReview(restaurantId, formData);
        queryClient.invalidateQueries({ queryKey: ['review'] });
      } catch (error) {
        console.log(error);
      }
    },
    mutationKey: ['review'],
  });
  return { mutate, isError, isLoading };
};
