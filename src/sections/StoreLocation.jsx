import "../styles/StoreLocation.css";

function StoreLocation() {
  return (
    <section className="store">

      <h2>📍 Visit Our Store</h2>

      <div className="store-container">

        <div className="store-info">

          <h3>Monarch Mobile Shop & Accessories</h3>

          <p>📍 Vasai (West), Maharashtra</p>

          <p>📞 +91 9876543210</p>

          <p>✉ monarchmobiles@gmail.com</p>

          <p>🕘 Mon - Sun : 10:00 AM - 9:30 PM</p>

        </div>

        <div className="map">

          <iframe
            title="Monarch Mobile Shop"
            src="https://www.google.com/maps?q=Vasai%20West&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </section>
  );
}

export default StoreLocation;