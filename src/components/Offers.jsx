import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, Shield, Lock, Headphones, Gift } from 'lucide-react';
import { useCart } from '../context/CartContext';
import '../styles/offers.css';

import p1 from '../assets/perfume-1.jpg';
import p2 from '../assets/perfume-2.jpg';
import p3 from '../assets/perfume-3.jpg';
import p4 from '../assets/perfume-4.jpg';
import p5 from '../assets/perfume-5.jpg';

const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, min: 0, seg: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) { clearInterval(interval); return; }
      setTimeLeft({
        dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
        min: Math.floor((diff / (1000 * 60)) % 60),
        seg: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};

const categorias = [
  { img: p1, badge: 'HASTA 30% OFF', icono: '🌸', nombre: 'Perfumes Florales', desc: 'Fragancias frescas y elegantes para cada ocasión.', btn: 'COMPRAR AHORA' },
  { img: p2, badge: '2X1', icono: '🍶', nombre: 'Perfumes de Nicho', desc: 'Ediciones exclusivas y aromas únicos que te distinguen.', btn: 'DESCUBRIR' },
  { img: p3, badge: 'DESDE 20% OFF', icono: '🖤', nombre: 'Perfumes Masculinos', desc: 'Aromas intensos y sofisticados de marcas reconocidas.', btn: 'VER COLECCIÓN' },
  { img: p4, badge: 'HASTA 40% OFF', icono: '🌹', nombre: 'Perfumes Femeninos', desc: 'Fragancias irresistibles para cada momento de tu día.', btn: 'COMPRAR' },
];

const Offers = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const countdown = useCountdown('2025-12-31T23:59:59');

  const handleAddToCart = () => {
    addToCart({ id: 99, name: 'La Vie Est Belle', price: 84, image: p5, size: '75ml', quantity: 1 });
    setIsCartOpen(true);
  };

  return (
    <div className="offers-page">

      {/* HERO BANNER */}
      <div className="offers-hero">
        <div className="offers-hero-text">
          <span className="offers-hero-tag">POR TIEMPO LIMITADO</span>
          <h1 className="offers-hero-title">
            Ofertas<br />
            <span className="offers-hero-italic">Exclusivas</span>
          </h1>
          <p className="offers-hero-desc">
            Encuentra tus fragancias favoritas con<br />
            descuentos especiales por tiempo limitado.
          </p>
          <Link to="/catalogo" className="offers-hero-btn">
            <ShoppingBag size={16} />
            VER OFERTAS
          </Link>
        </div>
        <div className="offers-hero-img">
          <img src={p5} alt="Ofertas exclusivas" />
          <div className="offers-hero-badge">
            <span className="badge-top">HASTA</span>
            <span className="badge-num">40%</span>
            <span className="badge-bot">DE DESCUENTO</span>
          </div>
        </div>
      </div>

      {/* GRID DE CATEGORÍAS */}
      <div className="offers-grid">
        {categorias.map((cat, i) => (
          <div key={i} className="offers-card">
            <div className="offers-card-img">
              <img src={cat.img} alt={cat.nombre} />
              <span className="offers-card-badge">{cat.badge}</span>
            </div>
            <div className="offers-card-body">
              <div className="offers-card-icon">{cat.icono}</div>
              <div className="offers-card-info">
                <h3>{cat.nombre}</h3>
                <p>{cat.desc}</p>
              </div>
            </div>
            <Link to="/catalogo" className="offers-card-btn">{cat.btn}</Link>
          </div>
        ))}
      </div>

      {/* FILA INFERIOR */}
      <div className="offers-bottom">

        {/* OFERTA DE LA SEMANA */}
        <div className="offers-week">
          <div className="offers-week-left">
            <div className="offers-week-icon"><Gift size={28} /></div>
            <div>
              <span className="offers-week-tag">OFERTA DE LA SEMANA</span>
              <h3 className="offers-week-title">
                Compra 2 perfumes<br />
                y recibe <span className="offers-week-accent">envío gratis</span>
              </h3>
              <p className="offers-week-sub">En Managua en todas tus compras.</p>
            </div>
          </div>
          <div className="offers-week-right">
            <span className="countdown-label">TERMINA EN:</span>
            <div className="countdown">
              {[
                { val: countdown.dias, lbl: 'DÍAS' },
                { val: countdown.horas, lbl: 'HORAS' },
                { val: countdown.min, lbl: 'MIN' },
                { val: countdown.seg, lbl: 'SEG' },
              ].map((item, i) => (
                <div key={i} className="countdown-block">
                  <span className="countdown-num">{String(item.val).padStart(2, '0')}</span>
                  <span className="countdown-lbl">{item.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PERFUME DEL MES */}
        <div className="offers-featured">
          <div className="offers-featured-text">
            <span className="offers-featured-tag">PERFUME DEL MES</span>
            <h2 className="offers-featured-name">La Vie Est Belle</h2>
            <p className="offers-featured-brand">Lancôme</p>
            <p className="offers-featured-desc">
              Un aroma icónico que celebra la felicidad<br />y la belleza de cada momento.
            </p>
            <div className="offers-featured-price">
              <span className="price-old">$120.00</span>
              <span className="price-new">$84.00</span>
            </div>
            <button className="offers-featured-btn" onClick={handleAddToCart}>
              COMPRAR AHORA
            </button>
          </div>
          <div className="offers-featured-img">
            <img src={p5} alt="La Vie Est Belle" />
            <div className="offers-featured-badge">-30%<br /><span>DE DESCUENTO</span></div>
          </div>
        </div>

      </div>

      {/* GARANTÍAS */}
      <div className="offers-guarantees">
        {[
          { icon: <Truck size={28} />, title: 'Envíos rápidos', sub: 'A todo Nicaragua' },
          { icon: <Shield size={28} />, title: 'Productos 100% originales', sub: 'Garantía de autenticidad' },
          { icon: <Lock size={28} />, title: 'Compra segura', sub: 'Tus datos protegidos' },
          { icon: <Headphones size={28} />, title: 'Asesoría personalizada', sub: 'Estamos para ayudarte' },
        ].map((g, i) => (
          <div key={i} className="guarantee-item">
            <div className="guarantee-icon">{g.icon}</div>
            <div>
              <p className="guarantee-title">{g.title}</p>
              <p className="guarantee-sub">{g.sub}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Offers;