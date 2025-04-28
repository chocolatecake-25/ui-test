import { create } from "zustand";

type GlobalState = {
  theme: string;
  nav: string;
  updateTheme: (newTheme: string) => void;
  updateNav: (newNav: string) => void;
};

const initialState = {
  theme: "light",
  nav: "setting",
};

export const useStateStore = create<GlobalState>()((set) => ({
  ...initialState,
  updateTheme: (newTheme) => set({ theme: newTheme }),
  updateNav: (newNav) => set({ nav: newNav }),
}));
