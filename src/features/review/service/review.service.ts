import { api } from '@/lib/api/axios';
import {
  DeleteReviewPayload,
  EditReviewPayload,
  GetReviewsData,
} from '../types';
import { ApiResponse } from '@/types/api.type';
import { CreateReviewBody } from '../schema/reviewSchema';

export const createNewReview = async (payload: CreateReviewBody) => {
  const { data } = await api.post('/review', payload);
  return data;
};

export const getMyReviews = async () => {
  const { data } =
    await api.get<ApiResponse<GetReviewsData>>('/review/my-review');
  return data;
};

export const editReview = async (payload: EditReviewPayload) => {
  const { reviewId, comment, star } = payload;
  const { data } = await api.put(`/review/${reviewId}`, { star, comment });
  return data;
};

export const deleteReview = async (payload: DeleteReviewPayload) => {
  const { reviewId } = payload;
  const { data } = await api.delete(`/review/${reviewId}`);
  return data;
};
