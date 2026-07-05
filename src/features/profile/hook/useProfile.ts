import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../service/profile.service';
import { authStore } from '@/store/auth-store';

export const useProfile = () => {
  const token = authStore((state) => state.token);
  return useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    enabled: !!token,
  });
};
