import { useState, useEffect, useRef, useCallback } from "react";
import "../styles/featured-carousel.css";

import p1 from "../assets/perfume-1.jpg";
import p2 from "../assets/perfume-2.jpg";
import p3 from "../assets/perfume-3.jpg";
import p4 from "../assets/perfume-4.jpg";
import p5 from "../assets/perfume-5.jpg";
import p6 from "../assets/perfume-6.jpg";

const destacados = [
  {
    img: p1,
    nombre: "Noir Absolu",
    categoria: "DISEÑADOR",
    precio: "$85",
    cantidad: "100ml",
    notas: "Oud · Vainilla · Ámbar",
    descripcion: "Una fragancia oscura y envolvente que deja una huella imborrable.",
    tipo: "EN STOCK",
  },
  {
    img: p2,
    nombre: "Fleur Délicate",
    categoria: "DISEÑADOR",
    precio: "$72",
    cantidad: "75ml",
    notas: "Jazmín · Peonía · Almizcle",
    descripcion: "La suavidad de las flores de primavera capturada en un frasco.",
    tipo: "EN STOCK",
  },
  {
    img: p3,
    nombre: "Ombre Intense",
    categoria: "NICHO",
    precio: "$120",
    cantidad: "100ml",
    notas: "Cuero · Tabaco · Bergamota",
    descripcion: "Audaz y sofisticado. Una firma para quienes no pasan desapercibidos.",
    tipo: "POR ENCARGO",
  },
  {
    img: p4,
    nombre: "Ambre Royal",
    categoria: "NICHO",
    precio: "$95",
    cantidad: "50ml",
    notas: "Ámbar · Sándalo · Incienso",
    descripcion: "La realeza del ámbar fundida con maderas sagradas del oriente.",
    tipo: "EN STOCK",
  },
  {
    img: p5,
    nombre: "Rose Eternelle",
    categoria: "DISEÑADOR",
    precio: "$68",
    cantidad: "100ml",
    notas: "Rosa · Lichi · Pachulí",
    descripcion: "Una rosa que nunca se desvanece. Romance eterno en cada gota.",
    tipo: "POR ENCARGO",
  },
  {
    img: p6,
    nombre: "Bleu Profond",
    categoria: "DISEÑADOR",
    precio: "$88",
    cantidad: "100ml",
    notas: "Vetiver · Cedro · Bergamota",
    descripcion: "Fresco, profundo y sereno. Como el mar antes del amanecer.",
    tipo: "EN STOCK",
  },
];

const AUTOPLAY_DELAY = 4500;

const FeaturedCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const intervalRef = useRef(null);
  const total = destacados.length;

  const goTo = useCallback(
    (index, dir = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent((index + total) % total);
        setAnimating(false);
      }, 500);
    },
    [animating, total]
  );

  const next = useCallback(() => {
    goTo(current + 1, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1, "prev");
  }, [current, goTo]);

  // Autoplay
  useEffect(() => {
    intervalRef.current = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(intervalRef.current);
  }, [next]);

  const resetAutoplay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, AUTOPLAY_DELAY);
  };

  const handlePrev = () => {
    prev();
    resetAutoplay();
  };

  const handleNext = () => {
    next();
    resetAutoplay();
  };

  const handleDot = (i) => {
    const dir = i > current ? "next" : "prev";
    goTo(i, dir);
    resetAutoplay();
  };

  const consultarWhatsApp = (producto) => {
    const numero = "50587663145";
    const mensaje = `Hola, estoy interesado en la fragancia *"${producto.nombre}"* (${producto.cantidad}). Precio: ${producto.precio}. ¿Podrías brindarme más información?`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`, "_blank");
  };

  const slide = destacados[current];

  return (
    <section className="featured">
      {/* Header */}
      <div className="featured-header">
        <span className="featured-subtitle">DESTACADOS</span>
        <h2 className="featured-title">Fragancias Esenciales</h2>
        <p className="featured-desc">
          Una curaduría de las piezas más solicitadas de nuestra colección.
        </p>
      </div>

      {/* Carousel */}
      <div className="carousel-wrapper">
        {/* Progress bar */}
        <div className="carousel-progress" key={current}>
          <div className="carousel-progress-bar" />
        </div>

        <div className={`carousel-stage ${animating ? `exit-${direction}` : "enter"}`}>
          {/* Imagen */}
          <div className="carousel-image-side">
            <div className="carousel-image-frame">
              <img src={slide.img} alt={slide.nombre} />
              <div className="carousel-image-overlay" />
              <span className={`carousel-badge ${slide.tipo === "EN STOCK" ? "green" : "purple"}`}>
                {slide.tipo}
              </span>
            </div>
            {/* Miniaturas debajo */}
            <div className="carousel-thumbnails">
              {destacados.map((item, i) => (
                <button
                  key={i}
                  className={`thumb ${i === current ? "active" : ""}`}
                  onClick={() => handleDot(i)}
                  aria-label={`Ir a ${item.nombre}`}
                >
                  <img src={item.img} alt={item.nombre} />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="carousel-info-side">
            <div className="carousel-counter">
              <span className="counter-current">{String(current + 1).padStart(2, "0")}</span>
              <span className="counter-sep" />
              <span className="counter-total">{String(total).padStart(2, "0")}</span>
            </div>

            <p className="carousel-categoria">{slide.categoria}</p>
            <h3 className="carousel-nombre">{slide.nombre}</h3>
            <p className="carousel-descripcion">{slide.descripcion}</p>

            <div className="carousel-notas">
              {slide.notas.split(" · ").map((nota) => (
                <span key={nota} className="nota-tag">{nota}</span>
              ))}
            </div>

            <div className="carousel-bottom">
              <div className="carousel-precio-block">
                <span className="carousel-cantidad">{slide.cantidad} · EDP</span>
                <span className="carousel-precio">{slide.precio}</span>
              </div>
              <button
                className="carousel-btn"
                onClick={() => consultarWhatsApp(slide)}
              >
                Consultar ahora
              </button>
            </div>

            {/* Flechas */}
            <div className="carousel-arrows">
              <button className="arrow-btn" onClick={handlePrev} aria-label="Anterior">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M5 12l7-7M5 12l7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="arrow-btn" onClick={handleNext} aria-label="Siguiente">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M14 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;