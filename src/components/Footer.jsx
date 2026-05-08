import { Link } from "react-router-dom"; // 1. Importante importar Link
import '../styles/footer.css';
import { MessageCircle, Mail, Camera } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Columna 1: Marca */}
        <div className="footer-brand">
          <Link to="/" className="logo-link"> {/* El logo ahora vuelve al inicio */}
            <h2 className="logo">VF <span>Esence</span></h2>
          </Link>
          <p className="brand-description">
            Perfumería selectiva. Fragancias originales de diseñador y nicho en Managua, Nicaragua.
          </p>
        </div>

        {/* Columna 2: Navegación corregida */}
        <div className="footer-nav">
          <h3>Navegación</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalogo">Catálogo</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/galeria">Galería</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3: Redes (Estas se quedan como <a> porque son externas) */}
        <div className="footer-social">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="https://wa.me/50587663145" target="_blank" rel="noreferrer" className="social-link">
              <MessageCircle size={20} />
            </a>
            <a href="https://www.instagram.com/vf_essence?igsh=MW93cDExMGh5OGMycA==" target="_blank" rel="noreferrer" className="social-link">
              <Camera size={24} /> 
            </a>
            <a href="mailto:contacto@vfesence.com" className="social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>© 2026 VF Esence. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;