import "../styles/FeaturedProducts.css";
import products from "../data/products";
import ProductCard from "./ProductCard";

function FeaturedProducts() {

  const featuredProducts = products.filter(
    (product) => product.featured
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