import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Search } from 'lucide-react';
import '../styles/header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { setIsCartOpen, cartItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { name: "Inicio", path: "/" },
    {
      name: "Tienda",
      submenu: [
        { name: "Catálogo", path: "/catalogo" },
        { name: "Productos Destacados", path: "/destacados" },
        { name: "Ofertas", path: "/ofertas" },
      ]
    },
    {
      name: "Marca",
      submenu: [
        { name: "Nosotros", path: "/nosotros" },
        { name: "Galería", path: "/galeria" },
        { name: "Blog", path: "/blog" },
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
      <div className="header-content">

        {/* LOGO */}
        <div className="logo">
          <Link to="/">VF ESENCE</Link>
        </div>

        {/* MENÚ */}
        <nav className="nav">
          {navItems.map((item, index) => (
            <div key={index} className="nav-item-container">
              {item.submenu ? (
                <>
                  <span className="nav-dropdown-toggle">
                    {item.name} <span className="arrow">▾</span>
                  </span>
                  <div className="dropdown-menu">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link key={subIndex} to={subItem.path} className="dropdown-link">
                        {subItem.name}
                      </Link>
                    ))}
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

        {/* ICONOS DERECHA */}
        <div className="nav-icons">
          <button className="icon-btn" onClick={() => setSearchOpen(!searchOpen)} aria-label="Buscar">
            <Search size={19} />
          </button>
          <button className="icon-btn cart-icon-btn" onClick={() => setIsCartOpen(true)} aria-label="Carrito">
            <ShoppingBag size={19} />
            {totalItems > 0 && (
              <span className="cart-nav-count">{totalItems}</span>
            )}
          </button>
        </div>
      </div>

      {/* BARRA DE BÚSQUEDA */}
      {searchOpen && (
        <div className="search-bar">
          <input type="text" placeholder="Buscar fragancias..." autoFocus className="search-input" />
          <button className="search-close" onClick={() => setSearchOpen(false)}>✕</button>
        </div>
      )}
    </header>
  );
};

export default Header;