import { createContext, useContext } from "react";
import type { Product } from "../api/produkApi";

export interface WishlistContextType {
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (id: number) => boolean;
  removeFromWishlist: (id: number) => void;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
