import "../styles/ProductCard.css";

function ProductCard({ image, name, price, rating }) {
  return (
    <div className="product-card">

      <span className="new-badge">NEW</span>

      <span className="discount-badge">10% OFF</span>

      <img
        src={image}
        alt={name}
        className="product-image"
      />

      <h3>{name}</h3>

      <p className="price">
        ₹{price.toLocaleString("en-IN")}
      </p>

      <p className="rating">
        {"⭐".repeat(rating)}
      </p>

      <p className="offer">
        Free Delivery • EMI Available
      </p>

      <button className="buy-btn">
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;