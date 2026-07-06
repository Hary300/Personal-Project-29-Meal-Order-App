interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  latitude: number;
  longitude: number;
  createdAt: string;
}

export interface AuthData {
  user: User;
  token: string;
}
