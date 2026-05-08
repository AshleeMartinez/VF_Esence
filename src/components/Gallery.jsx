import useReveal from "../hooks/useReveal";
import "../styles/gallery.css";

import g1 from "../assets/gallery-1.jpg";
import g2 from "../assets/gallery-2.jpg";
import g3 from "../assets/gallery-3.jpg";
import g4 from "../assets/gallery-4.jpg";
import g5 from "../assets/gallery-5.jpg"; 
import g6 from "../assets/gallery-6.jpg";
import g7 from "../assets/gallery-7.jpg";

const Gallery = () => {
  useReveal();

  const images = [g1, g2, g3, g4, g5, g6, g7];

  return (
    <section id="galeria" className="gallery">
      <div className="gallery-header">
        <span className="subtitle fade-up">INSPIRACIÓN</span>
        <h2 className="section-title fade-up">Galería</h2>
        <p className="gallery-description fade-up">
          Una mirada visual a las fragancias y al universo VF Esence.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <div key={i} className={`gallery-item item-${i + 1} fade-up delay-${i}`}>
            <img src={img} alt={`Fragancia ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;