import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import "../styles/Navbar.css";


function Navbar() {
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
  />

  <button>
    🔍
  </button>

</div>

      <div className="nav-icons">
        <span>🛒</span>
        <button>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;