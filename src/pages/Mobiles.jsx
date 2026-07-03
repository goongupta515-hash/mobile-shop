import { useState } from "react";
import latestLaunches from "../data/latestLaunches";
import ProductCard from "../components/ProductCard";
import "../styles/Mobiles.css";

function Mobiles() {

  const [search, setSearch] = useState("");

  const filteredMobiles = latestLaunches.filter((phone) =>
    phone.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <section className="mobiles-page">

      <h1>Our Mobiles</h1>

      <input
        type="text"
        placeholder="Search mobiles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="mobiles-container">

        {filteredMobiles.map((phone) => (

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

export default Mobiles;