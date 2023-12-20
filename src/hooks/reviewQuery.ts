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
  const { mutate, isError, isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: {
      restaurantId: string | undefined;
      formData: FormData;
    }) => {
      try {
        const r = await postReview(data.restaurantId, data.formData).then(
          (r) => {
            return r;
          }
        );
        queryClient.invalidateQueries({ queryKey: ['review'] });
        return r;
      } catch (error) {
        return error;
      }
    },
    mutationKey: ['review'],
  });
  return { mutate, isError, isLoading, mutateAsync };
};

export const deleteReviewMutation = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, mutate, isError, isLoading } = useMutation({
    mutationFn: async (reviewId: number) => {
      try {
        const r = await deleteReview(reviewId);
        queryClient.invalidateQueries({ queryKey: ['review'] });
        return r;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    mutationKey: ['review'],
  });
  return { mutateAsync, mutate, isError, isLoading };
};

export const putReviewMutation = () => {
  const queryClient = useQueryClient();
  const { mutate, isError, isLoading } = useMutation({
    mutationFn: async (data: { reviewId: number; formData: FormData }) => {
      try {
        await putReview(data.reviewId, data.formData);
        queryClient.invalidateQueries({ queryKey: ['review'] });
      } catch (error) {
        console.log(error);
      }
    },
    mutationKey: ['review'],
  });
  return { mutate, isError, isLoading };
};
