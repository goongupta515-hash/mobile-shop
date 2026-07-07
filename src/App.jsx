import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Mobiles from "./pages/Mobiles";
import AccessoriesPage from "./pages/AccessoriesPage";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/mobiles" element={<Mobiles />} />

        <Route
          path="/accessories"
          element={<AccessoriesPage />}
        />

        <Route
          path="/offers"
          element={<Offers />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
        path="/cart"
        element={<Cart />}
       />

       <Route
  path="/checkout"
  element={<Checkout />}
/>

       <Route
  path="/order-success"
  element={<OrderSuccess />}
/>

<Route
  path="/wishlist"
  element={<Wishlist />}
/>

      </Routes>

    </>
  );
}

export default App;