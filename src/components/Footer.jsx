import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import '../styles/footer.css';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
);

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
              <InstagramIcon />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://tiktok.com/@vfesence" target="_blank" rel="noreferrer" className="social-icon" aria-label="TikTok">
              <TikTokIcon />
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