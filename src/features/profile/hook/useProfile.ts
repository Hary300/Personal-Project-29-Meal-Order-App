import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProfile, updateProfile } from '../service/profile.service';
import { authStore } from '@/features/auth/store/auth-store';
import { toast } from 'sonner';

export const useProfile = () => {
  const token = authStore((state) => state.token);
  return useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    enabled: !!token,
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['profile'],
      });
      toast.success('Profile updated successfully');
    },
  });
};
