import "../styles/BestSellers.css";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function BestSellers() {
  const { search } = useContext(SearchContext);

  const bestSellers = products.filter(
  (product) =>
    product.bestseller &&
    product.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <section className="best-sellers">

      <h2>⭐ Best Sellers</h2>

      <p className="section-subtitle">
        Customer favorites chosen for performance and value.
      </p>

      <div className="best-container">

        {bestSellers.map((phone) => (

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

export default BestSellers;