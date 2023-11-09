import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../beapi';

type MainStore = {
  me: User | null;
  setMe: (user: User) => void;
};

const useMainStore = create(
  persist<MainStore>(
    (set) => ({
      me: null,
      setMe: (user: User) => set(() => ({ me: user })),
    }),
    { name: 'main-storage' },
  ),
);

export default useMainStore;
