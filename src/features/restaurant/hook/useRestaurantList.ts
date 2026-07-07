import { useQuery } from '@tanstack/react-query';
import { GetRestaurantsParams } from '../types';
import { getRestaurantList } from '../service/restaurant.service';

export const useRestaurantList = (params: GetRestaurantsParams) => {
  return useQuery({
    queryKey: ['restaurant', params],
    queryFn: () => getRestaurantList(params),
  });
};
