import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    const exists = wishlist.find(
      (item) => item.id === product.id
    );

if (!exists) {
  setWishlist([...wishlist, product]);
  toast.success("Added to Wishlist ❤️");
}
  };

  const removeFromWishlist = (id) => {
  setWishlist((prevWishlist) =>
    prevWishlist.filter((item) => item.id !== id)
  );
  toast.info("Removed from Wishlist 🗑️");
};

  return (
    <WishlistContext.Provider
     value={{
  wishlist,
  addToWishlist,
  removeFromWishlist,
}}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;