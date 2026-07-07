import { api } from '@/lib/api/axios';
import { AddToCartPayload, CartData, UpdateCartItemPayload } from '../types';
import { ApiResponse } from '@/types/api.type';

export const addItemCart = async (payload: AddToCartPayload) => {
  const { data } = await api.post('/cart', payload);
  return data;
};

export const getItemsCart = async () => {
  const { data } = await api.get<ApiResponse<CartData>>('/cart');
  return data;
};

export const updateItemCart = async ({
  cartItemId,
  quantity,
}: UpdateCartItemPayload) => {
  const { data } = await api.put(`/cart/${cartItemId}`, { quantity });
  return data;
};

export const deleteAllItemsCart = async () => {
  const { data } = await api.delete('/cart');
  return data;
};

export const deleteOneItemCart = async (cartItemId: number) => {
  const { data } = await api.delete(`/cart/${cartItemId}`);
  return data;
};
