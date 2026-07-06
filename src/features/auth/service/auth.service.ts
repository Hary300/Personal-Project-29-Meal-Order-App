import { api } from '@/lib/api/axios';
import { type LoginSchema } from '../schemas/loginSchema';
import { RegisterSchema } from '../schemas/registerSchema';
import { AuthData } from '../types';
import { ApiResponse } from '@/types/api.type';

export type LoginPayload = Omit<LoginSchema, 'rememberMe'>;

export const login = async (payload: LoginPayload) => {
  const { data } = await api.post<ApiResponse<AuthData>>(
    '/auth/login',
    payload
  );
  return data;
};

export const register = async (payload: RegisterSchema) => {
  const { data } = await api.post<ApiResponse<AuthData>>(
    '/auth/register',
    payload
  );
  return data;
};
