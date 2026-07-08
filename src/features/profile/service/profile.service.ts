import { api } from '@/lib/api/axios';
import { ProfileData } from '../types';
import { ApiResponse } from '@/types/api.type';

export const getProfile = async () => {
  const { data } = await api.get<ApiResponse<ProfileData>>('/auth/profile');
  return data;
};
