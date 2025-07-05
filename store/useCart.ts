import { create } from "zustand";

interface CartStore {
  cart: number;
  addToCart: () => void;
  removeFromCart: () => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: 0,
  addToCart: () => set((state) => ({ cart: state.cart + 1 })),
  removeFromCart: () => set((state) => ({ cart: state.cart - 1 })),
  clearCart: () => set({ cart: 0 }),
}));
