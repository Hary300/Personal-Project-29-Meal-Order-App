import { Pagination } from '@/features/restaurant/types';

export type EditReviewPayload = {
  reviewId: number;
  restaurantId: number;
  star: number;
  comment: string;
};

export type DeleteReviewPayload = {
  restaurantId: number;
  reviewId: number;
};
// =================
export type ReviewMenu = {
  menuId: number;
  menuName: string;
  price: number;
  type: 'food' | 'drink';
  image: string;
  quantity: number;
};

export type ReviewRestaurant = {
  id: number;
  name: string;
  logo: string;
};

export type Review = {
  id: number;
  star: number;
  comment: string;
  createdAt: string;
  transactionId: string;
  restaurant: ReviewRestaurant;
  menus: ReviewMenu[];
};

export type GetReviewsData = {
  reviews: Review[];
  pagination: Pagination;
};
