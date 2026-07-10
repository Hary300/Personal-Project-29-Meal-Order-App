import { useQuery } from '@tanstack/react-query';
import { searchRestaurant } from '../service/restaurant.service';
import { SearchRestaurantParams } from '../types';

export const useSearchRestaurant = (params: SearchRestaurantParams) => {
  return useQuery({
    queryKey: ['restaurant', 'search', params],
    queryFn: () => searchRestaurant(params),
  });
};
