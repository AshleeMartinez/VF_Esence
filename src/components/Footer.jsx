import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, LinkIcon, Music2, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* COLUMNA 1 — MARCA */}
        <div className="footer-col footer-brand">
          <h2 className="footer-logo">VF ESENCE</h2>
          <p className="footer-brand-desc">
            Perfumería selectiva y nicho. Fragancias originales de diseñador
            y nicho. Autenticidad garantizada y asesoría personalizada.
          </p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/vf_essence" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <Camera size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
              <LinkIcon size={18} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="TikTok">
              <Music2 size={18} />
            </a>
          </div>
        </div>

        {/* COLUMNA 2 — NAVEGACIÓN */}
        <div className="footer-col">
          <h3 className="footer-col-title">Navegación</h3>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalogo">Tienda</Link></li>
            <li><Link to="/nosotros">Marca</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/galeria">Galería</Link></li>
            <li><Link to="/faq">Ayuda</Link></li>
          </ul>
        </div>

        {/* COLUMNA 3 — AYUDA */}
        <div className="footer-col">
          <h3 className="footer-col-title">Ayuda</h3>
          <ul className="footer-links">
            <li><Link to="/faq">Preguntas frecuentes</Link></li>
            <li><Link to="/faq">Envíos y entregas</Link></li>
            <li><Link to="/faq">Cambios y devoluciones</Link></li>
            <li><Link to="/faq">Términos y condiciones</Link></li>
            <li><Link to="/faq">Política de privacidad</Link></li>
          </ul>
        </div>

        {/* COLUMNA 4 — CONTACTO */}
        <div className="footer-col">
          <h3 className="footer-col-title">Contacto</h3>
          <ul className="footer-contact-list">
            <li>
              <a href="mailto:hola@vfesence.com" className="footer-contact-item">
                <Mail size={14} />
                hola@vfesence.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/50587663145" className="footer-contact-item" target="_blank" rel="noreferrer">
                <Phone size={14} />
                +505 8766-3145
              </a>
            </li>
            <li>
              <span className="footer-contact-item">
                <MapPin size={14} />
                Managua, Nicaragua
              </span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2024 VF ESENCE. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;