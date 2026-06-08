import useReveal from '../hooks/useReveal';
import '../styles/hero.css';

const Hero = () => {
  useReveal();

  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-tag fade-up">PERFUMERÍA SELECTIVA · MANAGUA, NICARAGUA</span>

        <h1 className="hero-title fade-up delay-1">
          Tu esencia,<br />
          <span className="hero-title-accent">tu firma.</span>
        </h1>

        <p className="hero-desc fade-up delay-2">
          Fragancias originales de diseñador y nicho.<br />
          Autenticidad garantizada y asesoría personalizada.
        </p>

        <div className="hero-actions fade-up delay-3">
          <a href="#catalogo" className="hero-btn-primary">Explorar Catálogo</a>
          <a href="#nosotros" className="hero-btn-secondary">Conócenos</a>
        </div>

        <div className="hero-stats fade-up delay-4">
          <div className="hero-stat">
            <span className="stat-num">100%</span>
            <span className="stat-label">Originales</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="stat-num">50+</span>
            <span className="stat-label">Fragancias</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="stat-num">2+</span>
            <span className="stat-label">Años de experiencia</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint fade-up delay-4">
        <span>Descubre</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;