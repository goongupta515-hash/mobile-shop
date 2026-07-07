import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

import logo from "../assets/logo/logo.png";
import "../styles/Navbar.css";


function Navbar() {
  const { search, setSearch } = useContext(SearchContext);
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  
  return (
    <nav className="navbar">
      <div className="logo">
    <img src={logo} alt="Monarch Mobile Shop Logo" />
     <h2> MONARCH Mobile Shop & Accessories</h2>
</div>

      <ul className="nav-links">

  <li>
    <NavLink to="/" end>Home</NavLink>
  </li>

  <li>
    <NavLink to="/mobiles">Mobiles</NavLink>
  </li>

  <li>
    <NavLink to="/accessories">Accessories</NavLink>
  </li>

  <li>
    <NavLink to="/offers">Offers</NavLink>
  </li>

  <li>
    <NavLink to="/contact">Contact</NavLink>
  </li>

</ul>

      <div className="search-box">

 <input
  type="text"
  placeholder="Search mobiles..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

  <button>
    🔍
  </button>

</div>

      <div className="nav-icons">

  <Link to="/wishlist" className="wishlist-link">
    ❤️ {wishlist.length}
  </Link>

  <Link to="/cart" className="cart-link">
    🛒 {cart.reduce((total, item) => total + item.quantity, 0)}
  </Link>

  <button>Login</button>

</div>
    </nav>
  );
}

export default Navbar;