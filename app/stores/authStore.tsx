// store.ts
import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (authState: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (authState: boolean) => set({ isAuthenticated: authState }),
}));

export default useAuthStore;
