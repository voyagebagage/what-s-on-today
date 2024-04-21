import { User } from '@nhost/react';
import { createContext } from 'react';

export interface UsersData {
  users: User[];
}

export interface UserInfo {
  id: string;
  name: string;
  picture: {
    data: {
      url: string;
    };
  };
  // Add other user properties as needed
}

export interface AuthContextType {
  user: UserInfo | null;
  isLoading: boolean;
  signIn: () => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);
