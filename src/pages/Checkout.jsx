import "../styles/Checkout.css";

function Checkout() {
  return (
    <div className="checkout-page">

      <h1>🛍 Checkout</h1>

      <form className="checkout-form">

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