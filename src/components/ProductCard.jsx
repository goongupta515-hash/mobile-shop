import "../styles/ProductCard.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";

function ProductCard({ id, image, name, price, rating }) {
  const { addToWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">

      <span className="new-badge">NEW</span>

      <button
        className="wishlist-btn"
        onClick={() =>
          addToWishlist({
            id,
            image,
            name,
            price,
            rating,
          })
        }
      >
        ❤️
      </button>

      <Link
        to={`/product/${id}`}
        className="product-link"
      >
        <img
          src={image}
          alt={name}
          className="product-image"
        />

        <h3>{name}</h3>
      </Link>

      <p className="price">
        ₹{price.toLocaleString("en-IN")}
      </p>

      <p className="rating">
        {"⭐".repeat(rating)}
      </p>

      <p className="offer">
        Free Delivery • EMI Available
      </p>

      <button
        className="buy-btn"
        onClick={() =>
          addToCart({
            id,
            image,
            name,
            price,
            rating,
          })
        }
      >
        🛒 Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;