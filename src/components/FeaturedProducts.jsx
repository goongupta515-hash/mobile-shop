import "../styles/FeaturedProducts.css";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function FeaturedProducts() {
  const { search } = useContext(SearchContext);

  const featuredProducts = products.filter(
  (product) =>
    product.featured &&
    product.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <section className="featured">

      <h2>Featured Mobiles</h2>

      <p className="section-subtitle">
        Discover our handpicked premium smartphones.
      </p>

      <div className="product-container">

        {featuredProducts.map((phone) => (

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

export default FeaturedProducts;