import { api } from '@/lib/api/axios';
import { ProfileData, UpdateProfileBody } from '../types';
import { ApiResponse } from '@/types/api.type';

export const getProfile = async () => {
  const { data } = await api.get<ApiResponse<ProfileData>>('/auth/profile');
  return data;
};

export const updateProfile = async (profileBody: UpdateProfileBody) => {
  const formData = new FormData();
  if (profileBody.name) {
    formData.append('name', profileBody.name);
  }

  if (profileBody.email) {
    formData.append('email', profileBody.email);
  }

  if (profileBody.phone) {
    formData.append('phone', profileBody.phone);
  }

  if (profileBody.avatar) {
    formData.append('avatar', profileBody.avatar);
  }
  const { data } = await api.put('/auth/profile', formData);
  return data;
};
