import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FeaturedCarousel from "./components/FeaturedCarousel";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Catalog />
          </>
        } />

        <Route path="/catalogo"    element={<Catalog />} />
        <Route path="/destacados"  element={<FeaturedCarousel />} />
        <Route path="/nosotros"    element={<About />} />
        <Route path="/galeria"     element={<Gallery />} />
        <Route path="/contacto"    element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;