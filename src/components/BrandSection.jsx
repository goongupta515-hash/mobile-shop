import "../styles/BrandSection.css";
import apple from "../assets/brands/apple.png";
import samsung from "../assets/brands/samsung.png";
import oneplus from "../assets/brands/oneplus.png";
import vivo from "../assets/brands/vivo.png";
import oppo from "../assets/brands/oppo.png";
import nothing from "../assets/brands/nothing.png";
import realme from "../assets/brands/realme.png";
import { Link } from "react-router-dom";

function BrandSection() {
  return (
    <section className="brand-section">

      <h2>Shop by Brand</h2>

      <div className="brand-container">

<Link to="/brand/Apple" className="brand-card">
    <img src={apple} alt="Apple" className="brand-logo" />
    <p>Apple</p>
</Link>

       <Link to="/brand/Samsung" className="brand-card">
    <img src={samsung} alt="Samsung" className="brand-logo" />
    <p>Samsung</p>
</Link>

        <Link to="/brand/OnePlus" className="brand-card">
    <img src={oneplus} alt="OnePlus" className="brand-logo" />
    <p>OnePlus</p>
</Link>

<Link to="/brand/Vivo" className="brand-card">
    <img src={nothing} alt="Nothing" className="brand-logo" />
    <p>Nothing</p>
</Link>

    <Link to="/brand/Realme" className="brand-card">
    <img src={realme} alt="Realme" className="brand-logo" />
    <p>Realme</p>
</Link>

<Link to="/brand/Oppo" className="brand-card">
    <img src={vivo} alt="Vivo" className="brand-logo" />
    <p>Vivo</p>
</Link>

        <Link to="/brand/Oppo" className="brand-card">
    <img src={oppo} alt="Oppo" className="brand-logo" />
    <p>Oppo</p>
</Link>

      </div>

    </section>
  );
}

export default BrandSection;