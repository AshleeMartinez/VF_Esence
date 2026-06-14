import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/blog.css';
import miVideo from '../assets/video tiktok.mp4';

// Importar imágenes de artículos desde los recursos existentes
import art1 from '../assets/blog-1.jpg'; // Personalidad
import art2 from '../assets/blog-2.jpg'; // Florales
import art3 from '../assets/blog-3.png'; // Ocasiones
import art4 from '../assets/blog-4.jpg'; // Oud
import art5 from '../assets/blog-5.jpg'; // Conservación
import art6 from '../assets/blog-6.jpg'; // Nicho

const ARTICULOS = [
  {
    id: 1,
    fecha: '15 MAY. 2026',
    categoria: 'GUÍAS',
    titulo: 'Cómo elegir tu fragancia según tu personalidad',
    resumen: 'Cada persona tiene una esencia única. Descubre cómo encontrar el perfume que mejor te representa y se convierte en tu firma personal irremplazable.',
    imagen: art1,
    slug: 'elegir-fragancia',
    externalLink: 'https://www.eluniversal.com.mx/de-ultima/como-encontrar-tu-perfume-ideal-segun-tu-personalidad/',
  },
  {
    id: 2,
    fecha: '02 MAY. 2026',
    categoria: 'TENDENCIAS',
    titulo: 'Notas florales: elegancia que perdura',
    resumen: 'Las fragancias florales son un clásico atemporal. Conoce sus notas principales, las mejores casas que las trabajan y cuándo usarlas.',
    imagen: art2,
    slug: 'notas-florales',
    externalLink: 'https://www.revistavpc.es/colaboraciones/6235-familia-olfativa-floral-ii.html',
  },
  {
    id: 3,
    fecha: '18 ABR. 2026',
    categoria: 'CONSEJOS',
    titulo: 'Perfumes para cada ocasión',
    resumen: 'Desde el día a día hasta momentos especiales, encuentra el aroma ideal. Una guía completa para nunca equivocarte con tu elección.',
    imagen: art3,
    slug: 'perfumes-ocasion',
        externalLink: 'https://www.primor.eu/blog/como-elegir-perfume-ocasion/',
  },
  {
    id: 4,
    fecha: '10 ABR. 2026',
    categoria: 'INGREDIENTES',
    titulo: 'La guía definitiva del Oud',
    resumen: 'El oud es uno de los ingredientes más preciados en perfumería oriental. Descubre su historia milenaria y sus mejores combinaciones modernas.',
    imagen: art4,
    slug: 'guia-oud',
     externalLink: 'https://aromasfenpal.com/blog/usos-y-aplicaciones/que-es-el-oud-y-a-que-huele/',
  },
  {
    id: 5,
    fecha: '28 MAR. 2026',
    categoria: 'CONSEJOS',
    titulo: 'Cómo conservar tus perfumes correctamente',
    resumen: 'La luz, el calor y la humedad son los principales enemigos de tus fragancias. Aprende a cuidarlas para que duren más tiempo.',
    imagen: art5,
    slug: 'conservar-perfumes',
    externalLink: 'https://www.debate.com.mx/el-perfume-se-echa-a-perder-7-tips-para-evitarlo-t202511090005.html', 
  },
  {
    id: 6,
    fecha: '15 MAR. 2026',
    categoria: 'TENDENCIAS',
    titulo: 'Fragancias de nicho: ¿qué las hace especiales?',
    resumen: 'Más allá de las marcas de diseñador, el mundo del nicho ofrece experiencias olfativas únicas e irrepetibles para paladares exigentes.',
    imagen: art6,
    slug: 'fragancias-nicho',
     externalLink: 'https://www.primor.eu/blog/perfume-nicho-que-es/',
  },
];

const Blog = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`¡Gracias! Te has suscrito con: ${email}`);
    setEmail('');
  };

  return (
    <div className="blog-page">

      {/* ══════════════════════════════════════════
          HERO — SIMPLE
      ══════════════════════════════════════════ */}
      <div className="blog-hero">
        <div className="blog-hero-grid">
          <div className="blog-hero-text">
            <span className="blog-tag">PERFUMERÍA SELECTIVA · MANAGUA</span>
            <h1 className="blog-hero-title">Blog</h1>
            <p className="blog-hero-sub">
              Notas, tendencias y secretos del mundo de la perfumería.
              Contenido exclusivo para quienes viven la fragancia.
            </p>
            <p className="blog-hero-intro">
              Aquí encontrarás contenido pensado para amantes de las fragancias: guías, consejos prácticos y recomendaciones para elegir tu aroma ideal.
            </p>
          </div>
          <aside className="blog-hero-aside">
            <div className="blog-hero-aside-card">
              <span className="blog-tag">Conoce un poco de nosotros</span>
              <h2 className="blog-video-title">Nuestro enfoque en fragancias</h2>
              <p className="blog-video-intro">
                Cada perfume cuenta una historia y en nuestra perfumería te ayudamos a encontrar la tuya. Seleccionamos fragancias con cuidado, ofrecemos atención personalizada y buscamos que cada aroma hable de quién eres.
              </p>
              <div className="blog-video-container">
                <video
                  src={miVideo}
                  controls
                  playsInline
                  className="blog-video-player"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ARTÍCULOS — PROTAGONISTAS
      ══════════════════════════════════════════ */}
      <div className="blog-articles-main">
        <div className="blog-section-header">
          <span className="blog-tag">CONTENIDO EDITORIAL</span>
          <h2 className="blog-section-title">Últimos Artículos</h2>
          <p className="blog-section-sub">
            Guías, tendencias y consejos del mundo de la perfumería selectiva.
          </p>
        </div>

        <div className="blog-articles-grid">
          {ARTICULOS.map((art) => (
            <article key={art.id} className="blog-article-card">
              <div className="blog-article-image">
                <img src={art.imagen} alt={art.titulo} />
                <span className="blog-article-category">{art.categoria}</span>
              </div>
              <div className="blog-article-content">
                <div className="blog-article-meta">
                  <span className="blog-article-date">{art.fecha}</span>
                </div>
                <h3 className="blog-article-title">{art.titulo}</h3>
                <p className="blog-article-excerpt">{art.resumen}</p>
                {art.externalLink ? (
                  <a
                    href={art.externalLink}
                    target="_blank"
                    rel="noreferrer"
                    className="blog-article-link"
                  >
                    Leer artículo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                ) : (
                  <Link to={`/blog/${art.slug}`} className="blog-article-link">
                    Leer artículo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECCIÓN OFERTAS — INFORMATIVA
      ══════════════════════════════════════════ */}
      <div className="blog-upcoming-offers">
        <div className="upcoming-offers-content">
          <div className="upcoming-offers-text">
            <span className="blog-tag">PRÓXIMAMENTE</span>
            <h2 className="upcoming-offers-title">Ofertas disponibles en Julio</h2>
            <p className="upcoming-offers-sub">
              Mantente pendiente de nuestras promociones exclusivas. Descuentos especiales 
              en fragancias seleccionadas estarán disponibles durante todo el mes de julio. 
              No te pierdas las mejores oportunidades.
            </p>
           
          </div>
          <div className="upcoming-offers-visual">
            <div className="upcoming-calendar">
              <span className="calendar-month">JULIO</span>
              <span className="calendar-year">2026</span>
            </div>
          </div>
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

export const BlogArticle = () => {
  const { slug } = useParams();
  const articulo = ARTICULOS.find((item) => item.slug === slug);

  if (!articulo) {
    return (
      <div className="blog-page">
        <div className="blog-section-header">
          <span className="blog-tag">Blog</span>
          <h2 className="blog-section-title">Artículo no encontrado</h2>
          <p className="blog-section-sub">Lo sentimos, no pudimos encontrar ese artículo.</p>
          <Link to="/blog" className="blog-article-link">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  
};

export default Blog;