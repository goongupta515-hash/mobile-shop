import { useParams } from "react-router-dom";
import products from "../data/products";
import accessories from "../data/accessories";
import ProductCard from "../components/ProductCard";

function BrandProducts() {
  const { brand } = useParams();

  const allProducts = [...products, ...accessories];

  const filteredProducts = allProducts.filter((item) =>
    item.name.toLowerCase().includes(brand.toLowerCase()) ||
    (item.brand &&
      item.brand.toLowerCase() === brand.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <h1>{brand} Products</h1>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              rating={item.rating}
            />
          ))
        ) : (
          <h2>No products found.</h2>
        )}
      </div>
    </div>
  );
}

export default BrandProducts;