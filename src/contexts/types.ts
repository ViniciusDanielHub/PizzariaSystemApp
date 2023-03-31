import { ReactNode } from "react";

export type IAuthContextData = {
  user: IUser | undefined;
  isAuthenticated: boolean;
  signIn: (credentials: IAuthentication) => Promise<void>;
  signOut: () => Promise<void>;
  loadingAuth: boolean;
  loading: boolean
}

export type IUser = {
  id: string;
  name: string;
  email: string;
  token: string;
}

export type IAuthProviderProps = {
  children: ReactNode;
}

export type IAuthentication = {
  email: string;
  password: string;
}