import useReveal from '../hooks/useReveal';
import '../styles/hero.css';

const Hero = () => {
  useReveal();

  return (
    <section id="inicio" className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
   <p className="hero-top fade-up">PERFUMERÍA SELECTIVA · MANAGUA</p>

        <h1 className="fade-up delay-1">
          Tu esencia,<br /><span>tu firma.</span>
        </h1>

    <p className="hero-desc fade-up delay-2">
          Fragancias originales de diseñador y nicho. Autencidad garantizada y asesoría personalizada.
        </p>

        <div className="fade-up delay-3">
          <a href="#catalogo" className="btn-main"> Explorar Catálogo </a>
<a href="#nosotros" className="btn-outline"> Conócenos </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;