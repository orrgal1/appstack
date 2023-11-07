import { create } from 'zustand';
import { User } from '../beapi';

type MainStore = {
  me: User | null;
  setMe: (user: User) => void;
};
const useMainStore = create<MainStore>((set) => ({
  me: null,
  setMe: (user: User) => set(() => ({ me: user })),
}));

export default useMainStore;
