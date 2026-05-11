import React, { useState } from "react";
import useReveal from "../hooks/useReveal";
import "../styles/gallery.css";

// Importaciones existentes
import g1 from "../assets/gallery-1.jpg";
import g2 from "../assets/gallery-2.jpg";
import g3 from "../assets/gallery-3.jpg";
import g4 from "../assets/gallery-4.jpg";
import g5 from "../assets/gallery-5.jpg"; 
import g6 from "../assets/gallery-6.jpeg";
import g7 from "../assets/gallery-7.jpg";
import g8 from "../assets/gallery-8.jpeg";


const Gallery = () => {
  useReveal();
  const [selectedItem, setSelectedItem] = useState(null);


  const galleryData = [
    { id: 1, img: g1, title: "Esencia Primaveral", desc: "Una combinación ligera de peonías y pétalos de rosa, ideal para el día a día." },
    { id: 2, img: g2, title: "Tu Firma Invisible", desc: "Un instante capturado donde la fragancia se encuentra con la piel. Un ritual diario que transforma una simple rutina en una declaración de estilo personal y sofisticación." },
    { id: 3, img: g3, title: "Cítrico Revitalizante", desc: "La frescura del limón siciliano mezclada con toques de menta fresca." },
    { id: 4, img: g4, title: "Misterio de Oriente", desc: "Especias exóticas y vainilla de Madagascar para una firma inolvidable." },
    { id: 5, img: g5, title: "Brisa Marina", desc: "Acordes acuáticos que evocan la libertad y la inmensidad del océano." },
    { id: 6, img: g6, title: "Madera Noble", desc: "Un aroma robusto de cedro y vetiver para personalidades fuertes." },
    { id: 7, img: g7, title: "Frescura Botánica", desc: "Cáscaras de naranja y hojas frescas acompañan a nuestra fragancia, ideal para visualizar los ingredientes de salida." },
    { id: 8, img: g8, title: "Aroma de Amor", desc: "El amor apasionado es esencial y entregarse a su vértigo es un acto de valentía. Puede poner París patas arriba. Y todo es real para quienes se atreven a vivirlo." },
  ];


  return (
    <section id="galeria" className="gallery-section">
      <div className="gallery-header fade-up">
        <span className="subtitle">INSPIRACIÓN</span>
        <h2 className="section-title">Nuestras Colecciones</h2>
        <p className="description">Haz clic en una imagen para descubrir su historia.</p>
      </div>

      <div className="gallery-grid-modern">
        {galleryData.map((item, i) => (
          <div 
            key={item.id} 
            className={`gallery-card fade-up delay-${i % 4}`}
            onClick={() => setSelectedItem(item)}
          >
            <div className="image-wrapper">
              <img src={item.img} alt={item.title} />
              <div className="card-overlay">
                <span>Ver Detalles</span>
              </div>
            </div>
            <div className="card-info">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* VENTANA MODAL (DETALLES) */}
      {selectedItem && (
        <div className="gallery-modal" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedItem(null)}>&times;</button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedItem.img} alt={selectedItem.title} />
              </div>
              <div className="modal-text">
                <span className="modal-label">DETALLES DE LA FRAGANCIA</span>
                <h2>{selectedItem.title}</h2>
                <div className="divider"></div>
                <p>{selectedItem.desc}</p>
                <button className="btn-main small" onClick={() => setSelectedItem(null)}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;