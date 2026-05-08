import useReveal from '../hooks/useReveal';
import '../styles/about.css';
import { Target, Eye, Shield, Users, Heart, Sparkles } from 'lucide-react';

const About = () => {
  useReveal();

  return (
    <section id="nosotros" className="about">
      {/* SECCIÓN HISTORIA */}
      <div className="about-section">
        <span className="subtitle fade-up">SOBRE NOSOTROS</span>
        <h2 className="fade-up">Nuestra Historia</h2>
        <p className="intro-text fade-up">
          Una pasión convertida en proyecto: acercar las fragancias originales a quienes valoran la autenticidad.
        </p>
        
        <div className="detailed-text fade-up">
          <p>VF Esence nace como un emprendimiento independiente impulsado por la pasión por las fragancias y la necesidad de ofrecer acceso a perfumes originales de marcas reconocidas a precios competitivos.</p>
          <p>Iniciando como un negocio de pedidos personales, hemos consolidado nuestra presencia en el mercado local gracias a la confianza de los clientes y la curaduría de productos exclusivos.</p>
        </div>

        <div className="mission-vision-grid">
          <div className="card-horizontal fade-up">
            <div className="icon-box orange"><Target size={30} /></div>
            <div className="card-content">
              <h3>Misión</h3>
              <p>Ofrecer una selección curada de fragancias originales de marcas nacionales e internacionales, brindando asesoría personalizada.</p>
            </div>
          </div>
          <div className="card-horizontal fade-up delay-1">
            <div className="icon-box purple"><Eye size={30} /></div>
            <div className="card-content">
              <h3>Visión</h3>
              <p>Posicionarnos como un referente en la comercialización de perfumería selectiva en el mercado local, destacando por la calidez.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN VALORES */}
      <div className="values-section">
        <span className="subtitle fade-up">LO QUE NOS DEFINE</span>
        <h2 className="fade-up">Nuestros valores</h2>
        
        <div className="cards-values">
          <div className="card-value fade-up">
            <div className="icon-wrapper green"><Shield /></div>
            <h3>Autenticidad</h3>
            <p>Productos 100% originales con garantía.</p>
          </div>
          <div className="card-value fade-up delay-1">
            <div className="icon-wrapper light-purple"><Users /></div>
            <h3>Confianza</h3>
            <p>Relaciones transparentes con cada cliente.</p>
          </div>
          <div className="card-value fade-up delay-2">
            <div className="icon-wrapper peach"><Heart /></div>
            <h3>Pasión</h3>
            <p>Amor genuino por el mundo de las fragancias.</p>
          </div>
          <div className="card-value fade-up delay-3">
            <div className="icon-wrapper dark-purple"><Sparkles /></div>
            <h3>Cercanía</h3>
            <p>Atención personalizada y honesta.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;