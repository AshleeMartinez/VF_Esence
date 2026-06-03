import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", path: "/" },
    {
      name: "Tienda",
      submenu: [
        { name: "Catálogo", path: "/catalogo" },
        { name: "Productos Destacados", path: "/destacados" },
        { name: "Ofertas", path: "/ofertas" },
        { name: "Carro de Compras", path: "/carrito" }
      ]
    },
    {
      name: "Marca",
      submenu: [
        { name: "Nosotros", path: "/nosotros" },
        { name: "Galería", path: "/galeria" },
        { name: "Blog", path: "/blog" }
      ]
    },
    {
      name: "Ayuda",
      submenu: [
        { name: "FAQ", path: "/faq" },
        { name: "Contacto", path: "/contacto" }
      ]
    }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        {/* LOGO DE UN SOLO COLOR */}
        <div className="logo">
          <Link to="/">VF ESENCE</Link>
        </div>

        {/* MENÚ ALINEADO A LA IZQUIERDA */}
        <nav className="nav">
          {navItems.map((item, index) => (
            <div key={index} className="nav-item-container">
              {item.submenu ? (
                <>
                  <span className="nav-dropdown-toggle">
                    {item.name} <span className="arrow">▾</span>
                  </span>
                  <div className="dropdown-menu">
                    {item.submenu.map((subItem, subIndex) => {
                      if (subItem.name === "Carro de Compras") {
                        return (
                          <button 
                            key={subIndex} 
                            onClick={() => setIsCartOpen(true)} 
                            className="dropdown-link style-as-link"
                          >
                            {subItem.name}
                          </button>
                        );
                      }
                      return (
                        <Link key={subIndex} to={subItem.path} className="dropdown-link">
                          {subItem.name}
                        </Link>
                      );
                    })}
                  </div>
                </>
              ) : (
                <Link to={item.path} className="nav-link">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;