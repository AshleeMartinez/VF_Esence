import { useState } from "react";
import useReveal from "../hooks/useReveal";
import "../styles/contact.css";

import { MessageCircle, Mail, Camera } from "lucide-react";

const Contact = () => {
  useReveal();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    alert("Mensaje enviado ✨");
  };

  return (
    <section id="contacto" className="contact">
      {/* Encabezado */}
      <div className="contact-header">
        <span className="subtitle fade-up">CONTÁCTANOS</span>
        <h2 className="fade-up">Hablemos</h2>
        <p className="contact-description fade-up">
          ¿Buscas una fragancia específica o necesitas asesoría? Estamos a un mensaje de distancia.
        </p>
      </div>

      <div className="contact-container">
        {/* Formulario */}
        <form className="contact-form fade-up" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nombre</label>
            <input 
              name="nombre" 
              placeholder="Tu nombre" 
              onChange={handleChange} 
            />
          </div>
          
          <div className="input-group">
            <label>Email</label>
            <input 
              name="email" 
              type="email" 
              placeholder="tu@email.com" 
              onChange={handleChange} 
            />
          </div>

          <div className="input-group">
            <label>Mensaje</label>
            <textarea 
              name="mensaje" 
              placeholder="¿En qué fragancia estás interesado?" 
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="btn-main">Enviar mensaje</button>
        </form>

        {/* Tarjetas de Información */}
        <div className="contact-cards">
          <a href="https://wa.me/50500000000" className="info-card fade-up delay-1" target="_blank" rel="noreferrer">
            <div className="icon-circle green"><MessageCircle size={24} /></div>
            <div className="info-text">
              <span className="info-label">WhatsApp</span>
              <span className="info-value">+505 8766-3145</span>
            </div>
          </a>

          <a href="https://instagram.com/vfesence" className="info-card fade-up delay-2" target="_blank" rel="noreferrer">
       <div className="icon-circle light-purple">
  <Camera size={24} /> 
</div>
            <div className="info-text">
              <span className="info-label">Instagram</span>
              <span className="info-value">@vfesence</span>
            </div>
          </a>

          <a href="mailto:contacto@vfesence.com" className="info-card fade-up delay-3">
            <div className="icon-circle peach"><Mail size={24} /></div>
            <div className="info-text">
              <span className="info-label">Email</span>
              <span className="info-value">contacto@vfesence.com</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;