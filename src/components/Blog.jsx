import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/blog.css';

import p1 from '../assets/perfume-1.jpg';
import p2 from '../assets/perfume-2.jpg';
import p3 from '../assets/perfume-3.jpg';
import p4 from '../assets/perfume-4.jpg';
import p5 from '../assets/perfume-5.jpg';
import p6 from '../assets/perfume-6.jpg';

const posts = [
  {
    id: 1,
    img: p1,
    fecha: '15 MAY. 2024',
    titulo: 'Cómo elegir tu fragancia según tu personalidad',
    resumen: 'Cada persona tiene una esencia única. Descubre cómo encontrar el perfume que mejor te representa.',
    slug: '/blog/elegir-fragancia',
  },
  {
    id: 2,
    img: p2,
    fecha: '02 MAY. 2024',
    titulo: 'Notas florales: elegancia que perdura',
    resumen: 'Las fragancias florales son un clásico atemporal. Conoce sus notas y cuándo usarlas.',
    slug: '/blog/notas-florales',
  },
  {
    id: 3,
    img: p3,
    fecha: '18 ABR. 2024',
    titulo: 'Perfumes para cada ocasión',
    resumen: 'Desde el día a día hasta momentos especiales, encuentra el aroma ideal para cada ocasión.',
    slug: '/blog/perfumes-ocasion',
  },
  {
    id: 4,
    img: p4,
    fecha: '10 ABR. 2024',
    titulo: 'La guía definitiva del Oud',
    resumen: 'El oud es uno de los ingredientes más preciados en perfumería. Descubre su historia y sus mejores combinaciones.',
    slug: '/blog/guia-oud',
  },
  {
    id: 5,
    img: p5,
    fecha: '28 MAR. 2024',
    titulo: 'Cómo conservar tus perfumes correctamente',
    resumen: 'La luz, el calor y la humedad son enemigos de tus fragancias. Aprende a cuidarlas para que duren más.',
    slug: '/blog/conservar-perfumes',
  },
  {
    id: 6,
    img: p6,
    fecha: '15 MAR. 2024',
    titulo: 'Fragancias de nicho: ¿qué las hace especiales?',
    resumen: 'Más allá de las marcas de diseñador, el mundo del nicho ofrece experiencias olfativas únicas e irrepetibles.',
    slug: '/blog/fragancias-nicho',
  },
];

const Blog = () => {
  return (
    <div className="blog-page">

      {/* HERO */}
      <div className="blog-hero">
        <div className="blog-hero-text">
          <h1 className="blog-hero-title">Blog</h1>
          <p className="blog-hero-sub">
            Notas, tendencias y secretos del mundo de la perfumería.
          </p>
        </div>
        <div className="blog-hero-img">
          <img src={p4} alt="Blog hero" />
        </div>
      </div>

      {/* ARTÍCULOS */}
      <div className="blog-container">
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-card">
              <Link to={post.slug} className="blog-card-img-wrap">
                <img src={post.img} alt={post.titulo} className="blog-card-img" />
              </Link>
              <div className="blog-card-body">
                <span className="blog-card-fecha">{post.fecha}</span>
                <h2 className="blog-card-titulo">
                  <Link to={post.slug}>{post.titulo}</Link>
                </h2>
                <p className="blog-card-resumen">{post.resumen}</p>
                <Link to={post.slug} className="blog-card-link">
                  Leer más →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="blog-newsletter">
        <div className="newsletter-inner">
          <div className="newsletter-img">
            <img src={p1} alt="Newsletter" />
          </div>
          <div className="newsletter-text">
            <h3 className="newsletter-title">Tu esencia, tu historia</h3>
            <p className="newsletter-sub">
              Suscríbete y recibe consejos, novedades y promociones exclusivas.
            </p>
          </div>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="newsletter-input"
            />
            <button className="newsletter-btn">Suscribirme</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Blog;