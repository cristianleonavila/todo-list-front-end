export interface LoginRequest {
  username: string | null;
  password: string | null;
}

export interface AuthenticatedUser {
  id: number;
  username: string;
}

export interface LoginResponse {
  user: AuthenticatedUser;
}
