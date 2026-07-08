import Hero from "../components/Hero";
import BrandSection from "../components/BrandSection";
import FeaturedProducts from "../components/FeaturedProducts";
import LatestLaunches from "../sections/LatestLaunches";
import BestSellers from "../sections/BestSellers";
import Accessories from "../sections/Accessories";
import Reviews from "../sections/Reviews";
import StoreLocation from "../sections/StoreLocation";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Hero />
      <BrandSection />
      <FeaturedProducts />
      <LatestLaunches />
      <BestSellers />
      <Accessories />
      <Reviews />
      <StoreLocation />
    </>
  );
}

export default Home;