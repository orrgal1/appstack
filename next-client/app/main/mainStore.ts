import {create} from 'zustand'
import {User} from "@/app/beapi";

type MainStore = {
    user: User | null,
    setUser: (user: User) => void
}

export const useMainStore = create<MainStore>((set) => ({
    user: null,
    setUser: (user: User) => set(state => ({user}))
}));