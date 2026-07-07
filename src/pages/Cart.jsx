import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>🛒 My Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">

  <h2>🛒 Your Cart is Empty</h2>

  <p>
    Looks like you haven't added anything yet.
  </p>

</div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />

                <div className="cart-details">
                  <h3>{item.name}</h3>

                  <p>₹{item.price.toLocaleString("en-IN")}</p>

                  <p>{"⭐".repeat(item.rating)}</p>

                  <div className="quantity-controls">
                    <button
                      className="qty-btn"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>

                    <span className="quantity">
                      {item.quantity}
                    </span>

                    <button
                      className="qty-btn"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    🗑 Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <p>
              <strong>Total Items:</strong> {totalItems}
            </p>

            <p>
              <strong>Subtotal:</strong> ₹
              {totalPrice.toLocaleString("en-IN")}
            </p>

            <p>
              <strong>Delivery:</strong> FREE
            </p>

            <hr />

            <h3>
              Grand Total: ₹
              {totalPrice.toLocaleString("en-IN")}
            </h3>

            <div className="summary-buttons">
              <button className="continue-btn">
                Continue Shopping
              </button>

              <button
  className="checkout-btn"
  onClick={() => navigate("/checkout")}
>
  Checkout
</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;