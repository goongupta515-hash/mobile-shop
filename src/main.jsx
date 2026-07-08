import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import SearchProvider from "./context/SearchContext";
import CartProvider from "./context/CartContext";
import WishlistProvider from "./context/WishlistContext";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
<StrictMode>
  <BrowserRouter>
    <SearchProvider>
     <CartProvider>
      <WishlistProvider>
       <App />
      </WishlistProvider>
     </CartProvider>
    </SearchProvider>
  </BrowserRouter>
</StrictMode>
);