import "../styles/LatestLaunches.css";
import latestLaunches from "../data/latestLaunches";
import ProductCard from "../components/ProductCard";

function LatestLaunches() {
  return (
    <section className="latest">

      <h2>🔥 Latest Launches</h2>

      <div className="latest-container">

        {latestLaunches.map((phone) => (

          <ProductCard
            key={phone.id}
            image={phone.image}
            name={phone.name}
            price={phone.price}
            rating={phone.rating}
          />

        ))}

      </div>

    </section>
  );
}

export default LatestLaunches;