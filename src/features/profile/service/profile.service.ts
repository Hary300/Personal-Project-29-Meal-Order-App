import { api } from '@/lib/api/axios';
import { ProfileResponse } from '../types';

export const getProfile = async () => {
  const { data } = await api.get<ProfileResponse>('/auth/profile');
  return data;
};
