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
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import BrandProducts from "./pages/BrandProducts";
import Footer from "./sections/Footer";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/NotFound";

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
  path="/login"
  element={<Login />}
/>

       <Route
  path="/order-success"
  element={<OrderSuccess />}
/>

<Route
  path="/wishlist"
  element={<Wishlist />}
/>

<Route
  path="/register"
  element={<Register />}
/>
<Route
  path="/product/:id"
  element={<ProductDetails />}
/>

<Route
  path="/brand/:brand"
  element={<BrandProducts />}
/>

<Route
  path="*"
  element={<NotFound />}
/>

      </Routes>
      <Footer />

<ToastContainer
  position="top-right"
  autoClose={2000}
/>

    </>
  );
}

export default App;