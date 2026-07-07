import { useNavigate } from "react-router-dom";
import "../styles/OrderSuccess.css";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-card">

<div className="success-icon">✅</div>

<h1>Order Placed Successfully!</h1>
        <p>
          Thank you for shopping with
          <strong> MONARCH Mobile Shop & Accessories</strong>.
        </p>

        <p>
          Your order has been received and will be processed soon.
        </p>

        <button
          className="home-btn"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>

      </div>
    </div>
  );
}

export default OrderSuccess;