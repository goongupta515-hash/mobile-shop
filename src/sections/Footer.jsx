import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>MONARCH Mobile Shop & Accessories</h2>

          <p>
            Your trusted destination for premium smartphones,
            accessories and excellent customer service.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Mobiles</li>
            <li>Accessories</li>
            <li>Offers</li>
            <li>Contact</li>
          </ul>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📍 Vasai (West), Maharashtra</p>
          <p>📞 +91 9876543210</p>
          <p>✉ monarchmobiles@gmail.com</p>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 MONARCH Mobile Shop & Accessories. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;