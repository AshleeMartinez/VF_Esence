import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import '../styles/faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "¿Los perfumes son 100% originales?",
      answer: "Absolutamente. En VF Esence trabajamos exclusivamente con distribuidores autorizados y casas de diseño internacionales. Cada fragancia se entrega en su empaque sellado original con sus respectivos códigos de lote (batch code) verificables."
    },
    {
      question: "¿Cómo realizan los envíos dentro de Nicaragua?",
      answer: "Realizamos envíos a todo el país. Para Managua contamos con delivery express en menos de 24 horas. Para los departamentos, realizamos los envíos de forma segura a través de agencias de carga certificadas o encomiendas directas, con tiempos de entrega de 24 a 48 horas."
    },
    {
      question: "¿Cuáles son los métodos de pago disponibles?",
      answer: "Ofrecemos múltiples opciones para tu comodidad: transferencias bancarias directas (BAC, BANPRO), pago con tarjeta de crédito/débito a través de nuestro enlace seguro, y la opción de pago en efectivo contra entrega válida para la zona de Managua."
    },
    {
      question: "¿Tienen tienda física para probar las fragancias?",
      answer: "Actualmente operamos como una boutique digital exclusiva de alta gama, lo que nos permite mantener precios competitivos y un catálogo de nicho importado. Brindamos asesoría personalizada detallada sobre las notas olfativas y fijación de cada perfume."
    },
    {
      question: "¿Cómo puedo saber qué perfume se adapta mejor a mí?",
      answer: "Te recomendamos revisar las familias olfativas en nuestro catálogo. Si buscas algo para el uso diario o climas cálidos, las notas cítricas y florales ligeras son ideales. Para eventos nocturnos o climas más frescos, las notas orientales o maderosas ofrecen mayor presencia."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page-container">
      {/* ENCABEZADO CON LA MISMA VIBRA EDITORIAL */}
      <div className="faq-header">
        <span className="faq-subtitle-top">Ayuda & Soporte</span>
        <h1 className="faq-title">Preguntas Frecuentes</h1>
        <p className="faq-description">
          ¿Buscas resolver una duda rápida sobre tu pedido o autenticidad? <br />
          Estamos aquí para garantizarte una experiencia impecable.
        </p>
      </div>

      {/* COMPONENTE DE ACORDEÓN */}
      <div className="faq-accordion-wrapper">
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <div key={index} className={`faq-item ${isOpen ? 'active' : ''}`}>
              <button 
                className="faq-question-btn" 
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{item.question}</span>
                <ChevronDown className={`faq-arrow-icon ${isOpen ? 'rotate' : ''}`} size={16} />
              </button>
              
              <div className={`faq-answer-content ${isOpen ? 'open' : ''}`}>
                <div className="faq-answer-inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;