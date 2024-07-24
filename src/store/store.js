import { create } from "zustand";

const useStore = create((set) => ({
  currentUser: { name: "Guest" },
  theme: "light",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));

export default useStore;
