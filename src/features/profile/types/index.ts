export type UpdateProfilePayload = {
  name?: string;
  email?: string;
  phone?: string;
};

export type ProfileData = {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string | null;
  latitude: number | null;
  longitude: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProfileBody = {
  name?: string;
  email?: string;
  phone?: string;
  avatar?: File;
};
