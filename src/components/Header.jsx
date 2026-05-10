import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 1. Importar Link
import '../styles/header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Catálogo", path: "/catalogo" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Galería", path: "/galeria" },
  { name: "Contacto", path: "/contacto" },
];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
         
          <div className="logo">
  <Link to="/">VF Esence</Link>
</div>
        </div>

        <nav className="nav">
          {navItems.map((item) => (
            /* 3. Usar <Link> con el atributo 'to' */
            <Link key={item.path} to={item.path}>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;



