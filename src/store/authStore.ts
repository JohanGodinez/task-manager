import { Session } from '@supabase/supabase-js';
import { create } from 'zustand';

interface Props {
  token: Session  | null;
  isAuthenticated: boolean;
  login: (token: Session) => void;
  logout: () => void;
}

const useAuthStore = create<Props>((set) => ({
  isAuthenticated: false,
  token: null,

  login: (token) =>
    set(() => ({
      isAuthenticated: true,
      token,
    })),

  logout: () =>
    set(() => ({
      isAuthenticated: false,
      token: null,
    })),
}));

export default useAuthStore;
