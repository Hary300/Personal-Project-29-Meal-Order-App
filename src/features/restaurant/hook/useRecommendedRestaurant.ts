import { useQuery } from '@tanstack/react-query';
import { getRecommendedRestaurants } from '../service/restaurant.service';
import { authStore } from '@/features/auth/store/auth-store';

export const useRecommendedRestaurants = () => {
  const token = authStore((state) => state.token);
  return useQuery({
    queryKey: ['restaurants', 'recommended-restaurants'],
    queryFn: getRecommendedRestaurants,
    enabled: !!token,
  });
};
