import { useParams } from "react-router-dom";
import products from "../data/products";
import accessories from "../data/accessories";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const allProducts = [...products, ...accessories];

  const product = allProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="product-details">

      <img
        src={product.image}
        alt={product.name}
        className="details-image"
      />

      <div className="details-info">

        <h1>{product.name}</h1>

        <h2>
          {typeof product.price === "number"
            ? `₹${product.price.toLocaleString("en-IN")}`
            : product.price}
        </h2>

        <p>
          {typeof product.rating === "number"
            ? "⭐".repeat(product.rating)
            : product.rating}
        </p>

        {product.brand && (
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
        )}

        {product.storage && (
          <p>
            <strong>Storage:</strong> {product.storage}
          </p>
        )}

        {product.color && (
          <p>
            <strong>Color:</strong> {product.color}
          </p>
        )}

        <p>
          Experience flagship performance with premium quality and cutting-edge technology.
        </p>

        <button
          className="details-cart-btn"
          onClick={() => addToCart(product)}
        >
          🛒 Add to Cart
        </button>

        <button
          className="details-wishlist-btn"
          onClick={() => addToWishlist(product)}
        >
          ❤️ Add to Wishlist
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;