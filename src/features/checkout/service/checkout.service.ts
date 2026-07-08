import { api } from '@/lib/api/axios';
import {
  CheckoutPayload,
  GetMyOrdersData,
  TransactionData,
  TransactionStatus,
} from '../types';
import { ApiResponse } from '@/types/api.type';

export const addOrderCheckout = async (payload: CheckoutPayload) => {
  const { data } = await api.post<ApiResponse<TransactionData>>(
    '/order/checkout',
    payload
  );
  return data;
};

export type GetMyOrderParams = {
  status?: TransactionStatus;
  page?: number;
  limit?: number;
};

export const getMyOrder = async ({
  status,
  page = 1,
  limit = 10,
}: GetMyOrderParams) => {
  const { data } = await api.get<ApiResponse<GetMyOrdersData>>(
    '/order/my-order',
    {
      params: {
        status,
        page,
        limit,
      },
    }
  );
  return data;
};
