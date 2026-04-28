import { create } from 'zustand'
import { loginRequest } from '../api';
import { LoginRequest } from '../types';

interface UserState {
    token?: string,
    isLoading: boolean,
    error?: string
}

interface UserActions {
    login: (info: LoginRequest) => Promise<boolean>,
    logout: () => void
}

export const useUserStore = create<UserState & UserActions>((set) => ({
  token: undefined,
  isLoading: false,
  error: undefined,

  login: async (info: LoginRequest): Promise<boolean> => {
    set({ isLoading: true, error: undefined });

    try {
        const response = await loginRequest(info);
        set({ token: response.accessToken });
        return true;
    } catch (error) {
        set({ error: 'Login failed. Please check your credentials.' });
        return false;
    } finally {
        set({ isLoading: false });
    }
  },

  logout: () => {
    set({ token: undefined });
  }
}));