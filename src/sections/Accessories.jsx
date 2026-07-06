import "../styles/Accessories.css";
import accessories from "../data/accessories";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function Accessories() {
  const { search } = useContext(SearchContext);

  return (

    <section className="accessories">

      <h2>🎧 Popular Accessories</h2>

      <p className="accessories-subtitle">
        Complete your mobile experience with premium accessories.
      </p>

      <div className="accessories-container">

        {accessories
  .filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )
  .map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            rating={item.rating}
          />

        ))}

      </div>

    </section>

  );

}

export default Accessories;