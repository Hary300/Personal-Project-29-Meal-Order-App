import { useQuery } from '@tanstack/react-query';
import { getRestaurantDetail } from '../service/restaurant.service';

export const useRestaurantDetail = (restaurantId: number) => {
  return useQuery({
    queryKey: ['restaurant', 'detail', restaurantId],
    queryFn: () => getRestaurantDetail(restaurantId),
    enabled: !!restaurantId,
  });
};
