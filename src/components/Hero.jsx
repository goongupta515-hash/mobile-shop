import hero from "../assets/hero/hero.png";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero-section">

      <div className="hero-left">

        <h1>Welcome to MONARCH</h1>

        <h2>Premium Mobile Shop & Accessories</h2>

        <p>
          Discover the latest smartphones and accessories from
          Apple, Samsung, OnePlus, Nothing, Realme and more.
        </p>

        <div className="hero-buttons">

          <button className="shop-btn">
            Shop Now
          </button>

          <button className="offer-btn">
            View Offers
          </button>

        </div>

      </div>

      <div className="hero-right">
        <img src={hero} alt="Hero Mobile" className="hero-image" />
      </div>

    </section>
  );
}

export default Hero;