import { User } from "./user";

export interface RootState {
  auth: AuthState;
  user: UserState;
}

export interface AuthState {
  accessToken: string | null;
}

export interface UserState {
  user: User | null;
}