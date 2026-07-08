import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>
          <h2>MONARCH</h2>

          <p>
            Your one-stop destination for premium
            mobiles and accessories.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <p>Home</p>
          <p>Mobiles</p>
          <p>Accessories</p>
          <p>Offers</p>
        </div>

        <div>
          <h3>Contact</h3>

          <p>📍 Mumbai, India</p>

          <p>📞 +91 9876543210</p>

          <p>✉ support@monarch.com</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 MONARCH Mobile Shop. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;