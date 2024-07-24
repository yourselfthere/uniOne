import { create } from "zustand";

export const useImageStore = create((set) => ({
  isOpen: false,
  imageUrl: "",
  openModal: (url) => set({ isOpen: true, imageUrl: url }),
  closeModal: () => set({ isOpen: false, imageUrl: "" }),
}));
