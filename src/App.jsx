import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Header /> {/* El Header se queda afuera para que sea visible en todas las páginas */}
      
      <Routes>
        {/* Página principal: Combina Hero y quizás un resumen del catálogo */}
        <Route path="/" element={
          <>
            <Hero />
            <Catalog />
         
          </>
        } />

        {/* Páginas individuales */}
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>

      <Footer /> {/* El Footer también es persistente */}
    </Router>
  );
}

export default App;