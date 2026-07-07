import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Checkout.css";

function Checkout() {
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

const handleOrder = (e) => {
  e.preventDefault();

  clearCart();

  navigate("/order-success");
};

  return (
    <div className="checkout-page">
      <h1>🛍 Checkout</h1>

      <form
        className="checkout-form"
        onSubmit={handleOrder}
      >
        <input
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          required
        />

        <textarea
          placeholder="Delivery Address"
          rows="4"
          required
        ></textarea>

        <button type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;