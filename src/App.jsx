import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import CartSideBar from "./components/CartSideBar";
import Footer from "./components/Footer";

// Componentes actuales
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import FeaturedCarousel from "./components/FeaturedCarousel";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

// Nuevos componentes para completar las páginas
import Offers from "./components/Offers"; 
import Blog from "./components/Blog";
import Faq from "./components/Faq";
import CartPage from "./components/CartPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <CartSideBar />
        
        <Routes>
          {/* Vista de Inicio */}
          <Route path="/" element={
            <>
              <Hero />
              <Catalog />
            </>
          } />

          {/* MENÚ: TIENDA */}
          <Route path="/catalogo"   element={<Catalog />} />
          <Route path="/destacados" element={<FeaturedCarousel />} />
          <Route path="/ofertas"    element={<Offers />} />
          <Route path="/carrito"    element={<CartPage />} />

          {/* MENÚ: MARCA */}
          <Route path="/nosotros"   element={<About />} />
          <Route path="/galeria"    element={<Gallery />} />
          <Route path="/blog"       element={<Blog />} />

          {/* MENÚ: AYUDA */}
          <Route path="/faq"        element={<Faq />} />
          <Route path="/contacto"   element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;