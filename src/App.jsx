import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Mobiles from "./pages/Mobiles";
import AccessoriesPage from "./pages/AccessoriesPage";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/mobiles" element={<Mobiles />} />

        <Route
          path="/accessories"
          element={<AccessoriesPage />}
        />

        <Route
          path="/offers"
          element={<Offers />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </>
  );
}

export default App;