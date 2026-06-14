import React, { useState } from 'react';
import '../styles/blog.css';
import miVideo from '../assets/video tiktok.mp4';

// ── VIDEO LOCAL ─────────────────────────────────────────────────────────────
// OPCIÓN A — Si tu video está en src/assets/, descomenta esta línea:
// import miVideo from '../assets/video tiktok.mp4';
//
// OPCIÓN B — Si tu video está en la carpeta public/, usa directamente:
// src="/video tiktok.mp4"   ← (dentro de la etiqueta <video> más abajo)
// ────────────────────────────────────────────────────────────────────────────

import p12 from '../assets/perfume-12.jpg';
import p13 from '../assets/perfume-13.jpg';
import p14 from '../assets/perfume-14.jpg';
import p15 from '../assets/perfume-15.jpg';
import p16 from '../assets/perfume-16.jpg';

const OFERTAS = [
  {
    id: 12,
    img: p12,
    badge: 'HASTA 30% OFF',
    nombre: 'Club de Nuit Intense Man',
    marca: 'Armaf',
    precio: 55,
    precioOriginal: 75,
    descuento: 27,
    cantidad: '105ml',
    notas: 'Limón, Piña, Abedul, Almizcle, Ámbar Gris',
  },
  {
    id: 13,
    img: p13,
    badge: '2X1',
    nombre: 'Baccarat Rouge 540',
    marca: 'Maison Francis Kurkdjian',
    precio: 325,
    precioOriginal: 400,
    descuento: 19,
    cantidad: '70ml',
    notas: 'Azafrán, Jazmín, Madera de Ámbar, Resina de Abeto',
  },
  {
    id: 14,
    img: p14,
    badge: 'HASTA 40% OFF',
    nombre: 'Cedrat Boise',
    marca: 'Mancera',
    precio: 140,
    precioOriginal: 180,
    descuento: 22,
    cantidad: '120ml',
    notas: 'Grosellas Negras, Cítricos, Sándalo, Cuero',
  },
  {
    id: 15,
    img: p15,
    badge: 'DESDE 20% OFF',
    nombre: 'Versace Eros',
    marca: 'Versace',
    precio: 115,
    precioOriginal: 145,
    descuento: 21,
    cantidad: '100ml',
    notas: 'Menta, Manzana Verde, Limón Italiano, Habtonka',
  },
  {
    id: 16,
    img: p16,
    badge: 'HASTA 30% OFF',
    nombre: 'One Million Elixir',
    marca: 'Paco Rabanne',
    precio: 84,
    precioOriginal: 120,
    descuento: 30,
    cantidad: '100ml',
    notas: 'Manzana, Rosa de Damasco, Haba Tonka, Vainilla',
  },
];

const ARTICULOS = [
  {
    id: 1,
    fecha: '15 MAY. 2024',
    categoria: 'GUÍAS',
    titulo: 'Cómo elegir tu fragancia según tu personalidad',
    resumen: 'Cada persona tiene una esencia única. Descubre cómo encontrar el perfume que mejor te representa y se convierte en tu firma personal irremplazable.',
  },
  {
    id: 2,
    fecha: '02 MAY. 2024',
    categoria: 'TENDENCIAS',
    titulo: 'Notas florales: elegancia que perdura',
    resumen: 'Las fragancias florales son un clásico atemporal. Conoce sus notas principales, las mejores casas que las trabajan y cuándo usarlas.',
  },
  {
    id: 3,
    fecha: '18 ABR. 2024',
    categoria: 'CONSEJOS',
    titulo: 'Perfumes para cada ocasión',
    resumen: 'Desde el día a día hasta momentos especiales, encuentra el aroma ideal. Una guía completa para nunca equivocarte con tu elección.',
  },
  {
    id: 4,
    fecha: '10 ABR. 2024',
    categoria: 'INGREDIENTES',
    titulo: 'La guía definitiva del Oud',
    resumen: 'El oud es uno de los ingredientes más preciados en perfumería oriental. Descubre su historia milenaria y sus mejores combinaciones modernas.',
  },
  {
    id: 5,
    fecha: '28 MAR. 2024',
    categoria: 'CONSEJOS',
    titulo: 'Cómo conservar tus perfumes correctamente',
    resumen: 'La luz, el calor y la humedad son los principales enemigos de tus fragancias. Aprende a cuidarlas para que duren más tiempo.',
  },
  {
    id: 6,
    fecha: '15 MAR. 2024',
    categoria: 'TENDENCIAS',
    titulo: 'Fragancias de nicho: ¿qué las hace especiales?',
    resumen: 'Más allá de las marcas de diseñador, el mundo del nicho ofrece experiencias olfativas únicas e irrepetibles para paladares exigentes.',
  },
];

const Blog = () => {
  const [current, setCurrent] = useState(0);
  const [email, setEmail] = useState('');

  const prev = () => setCurrent((c) => (c - 1 + OFERTAS.length) % OFERTAS.length);
  const next = () => setCurrent((c) => (c + 1) % OFERTAS.length);

  const oferta = OFERTAS[current];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`¡Gracias! Te has suscrito con: ${email}`);
    setEmail('');
  };

  return (
    <div className="blog-page">

      {/* ══════════════════════════════════════════
          HERO — TEXTO + VIDEO
      ══════════════════════════════════════════ */}
      <div className="blog-hero">

        <div className="blog-hero-text">
          <span className="blog-tag">PERFUMERÍA SELECTIVA · MANAGUA</span>
          <h1 className="blog-hero-title">Blog</h1>
          <p className="blog-hero-sub">
            Notas, tendencias y secretos del mundo de la perfumería.
            Contenido exclusivo para quienes viven la fragancia.
          </p>
          <div className="blog-hero-stats">
            <div className="blog-stat">
              <span className="blog-stat-num">6+</span>
              <span className="blog-stat-label">Artículos</span>
            </div>
            <div className="blog-stat-sep" />
            <div className="blog-stat">
              <span className="blog-stat-num">5</span>
              <span className="blog-stat-label">Ofertas activas</span>
            </div>
            <div className="blog-stat-sep" />
            <div className="blog-stat">
              <span className="blog-stat-num">30%</span>
              <span className="blog-stat-label">Descuento máx.</span>
            </div>
          </div>
        </div>

        <div className="blog-hero-video">
          <div className="video-wrapper">
            <video
              src={miVideo}
              controls
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '18px',
                display: 'block',
              }}
            />
          </div>
         
        </div>

      </div>

      {/* ══════════════════════════════════════════
          CARRUSEL DE OFERTAS — SOLO INFORMATIVO
      ══════════════════════════════════════════ */}
      <div className="blog-offers-section">
        <div className="blog-section-header">
          <span className="blog-tag">OFERTAS DISPONIBLES</span>
          <h2 className="blog-section-title">Fragancias en Descuento</h2>
          <p className="blog-section-sub">
            Descubre nuestras ofertas exclusivas por tiempo limitado.
            Visita nuestra tienda para adquirirlas.
          </p>
        </div>

        <div className="offers-carousel">
          <div className="offers-carousel-img-side">
            <div className="offers-carousel-img-wrap">
              <img
                key={oferta.id}
                src={oferta.img}
                alt={oferta.nombre}
                className="offers-carousel-img"
              />
              <span className="offers-carousel-badge">{oferta.badge}</span>
              <div className="offers-carousel-discount">
                <span className="discount-num">-{oferta.descuento}%</span>
                <span className="discount-lbl">OFF</span>
              </div>
            </div>

            <div className="offers-carousel-thumbs">
              {OFERTAS.map((o, i) => (
                <button
                  key={o.id}
                  className={`offers-thumb ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ver ${o.nombre}`}
                >
                  <img src={o.img} alt={o.nombre} />
                </button>
              ))}
            </div>
          </div>

          <div className="offers-carousel-info">
            <div className="offers-carousel-counter">
              <span className="counter-cur">{String(current + 1).padStart(2, '0')}</span>
              <span className="counter-line" />
              <span className="counter-tot">{String(OFERTAS.length).padStart(2, '0')}</span>
            </div>

            <p className="offers-carousel-marca">{oferta.marca}</p>
            <h3 className="offers-carousel-nombre">{oferta.nombre}</h3>
            <p className="offers-carousel-cantidad">Eau de Parfum · {oferta.cantidad}</p>
            <p className="offers-carousel-notas">{oferta.notas}</p>

            <div className="offers-carousel-prices">
              <span className="price-old">$ {oferta.precioOriginal.toFixed(2)}</span>
              <span className="price-new">$ {oferta.precio.toFixed(2)}</span>
              <span className="price-save">
                Ahorras $ {(oferta.precioOriginal - oferta.precio).toFixed(2)}
              </span>
            </div>

            <div className="offers-carousel-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <span>Disponible en nuestra tienda. Escríbenos por WhatsApp para consultar.</span>
            </div>

            <div className="offers-carousel-arrows">
              <button className="offers-arrow" onClick={prev} aria-label="Anterior">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
                </svg>
              </button>
              <button className="offers-arrow" onClick={next} aria-label="Siguiente">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M14 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ARTÍCULOS
      ══════════════════════════════════════════ */}
      <div className="blog-articles-section">
        <div className="blog-section-header">
          <span className="blog-tag">CONTENIDO EDITORIAL</span>
          <h2 className="blog-section-title">Últimos Artículos</h2>
          <p className="blog-section-sub">
            Guías, tendencias y consejos del mundo de la perfumería selectiva.
          </p>
        </div>

        <div className="blog-grid">
          {ARTICULOS.map((art, i) => (
            <article key={art.id} className="blog-card">
              <div className="blog-card-num">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="blog-card-cat">{art.categoria}</span>
                  <span className="blog-card-fecha">{art.fecha}</span>
                </div>
                <h3 className="blog-card-titulo">{art.titulo}</h3>
                <p className="blog-card-resumen">{art.resumen}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          NEWSLETTER
      ══════════════════════════════════════════ */}
      <div className="blog-newsletter">
        <div className="newsletter-inner">
          <div className="newsletter-text">
            <span className="blog-tag" style={{ color: '#c48a56' }}>MANTENTE AL DÍA</span>
            <h3 className="newsletter-title">Tu esencia, tu historia</h3>
            <p className="newsletter-sub">
              Suscríbete y recibe consejos, novedades y promociones
              exclusivas directamente en tu correo.
            </p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-btn">
              Suscribirme
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Blog;