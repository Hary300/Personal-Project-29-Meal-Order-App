import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addOrderCheckout,
  getMyOrder,
  GetMyOrderParams,
} from '../service/checkout.service';

export const checkoutKeys = {
  all: ['checkout'] as const,
  myOrders: (params: GetMyOrderParams) =>
    [...checkoutKeys.all, 'my-orders', params] as const,
};

export const useAddOrderCheckout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addOrderCheckout,
    onSuccess: (data) => {
      queryClient.setQueryData(['last-checkout'], data.data.transaction);
      queryClient.invalidateQueries({
        queryKey: checkoutKeys.all,
      });
    },
  });
};

export const useGetMyOrderCheckout = (params: GetMyOrderParams) => {
  return useQuery({
    queryKey: checkoutKeys.myOrders(params),
    queryFn: () => getMyOrder(params),
  });
};
