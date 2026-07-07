import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import "../styles/Wishlist.css";

function Wishlist() {

  const {
  wishlist,
  removeFromWishlist,
} = useContext(WishlistContext);

const { addToCart } = useContext(CartContext);
  
  return (
    <div className="wishlist-page">

      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (

        <h2>Your wishlist is empty.</h2>

      ) : (

        <div className="wishlist-items">

          {wishlist.map((item) => (

            <div
              key={item.id}
              className="wishlist-item"
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <h3>{item.name}</h3>

              <p>
                ₹{item.price.toLocaleString("en-IN")}
              </p>

              <p>
                {"⭐".repeat(item.rating)}
              </p>

              <div className="wishlist-buttons">

<button
  className="cart-btn"
  onClick={() => {
    addToCart(item);
    removeFromWishlist(item.id);
  }}
>
  🛒 Move to Cart
</button>

</div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Wishlist;