 import Hero from "../components/Hero";
import BrandSection from "../components/BrandSection";
import FeaturedProducts from "../components/FeaturedProducts";
import LatestLaunches from "../sections/LatestLaunches";
import BestSellers from "../sections/BestSellers";
import Accessories from "../sections/Accessories";
import Reviews from "../sections/Reviews";
import StoreLocation from "../sections/StoreLocation";
import Footer from "../sections/Footer";

function Home() {
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
      <Footer />
    </>
  );
}

export default Home;