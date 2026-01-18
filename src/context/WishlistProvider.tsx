import { useState, useEffect, type ReactNode } from "react";
import { WishlistContext } from "./WishlistContext";
import type { Product } from "../api/produkApi";

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    const saved = localStorage.getItem("myWishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("myWishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (product: Product) => {
    const isExist = wishlist.find((item) => item.id === product.id);
    if (isExist) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setWishlist((prev) => [...prev, product]);
    }
  };

  const isInWishlist = (id: number) => {
    return wishlist.some((item) => item.id === id);
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist, removeFromWishlist }}>{children}</WishlistContext.Provider>;
};
