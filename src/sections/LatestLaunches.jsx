import "../styles/LatestLaunches.css";
import latestLaunches from "../data/latestLaunches";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function LatestLaunches() {
  const { search } = useContext(SearchContext);
  return (
    <section className="latest">

      <h2>🔥 Latest Launches</h2>

      <div className="latest-container">

        {latestLaunches
  .filter((phone) =>
    phone.name.toLowerCase().includes(search.toLowerCase())
  )
  .map((phone) => (

          <ProductCard
            key={phone.id}
            id={phone.id}
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