import useReveal from "../hooks/useReveal";
import "../styles/catalog.css";
import { useState } from "react";

import p1 from "../assets/perfume-1.jpg";
import p2 from "../assets/perfume-2.jpg";
import p3 from "../assets/perfume-3.jpg";
import p4 from "../assets/perfume-4.jpg";
import p5 from "../assets/perfume-5.jpg";
import p6 from "../assets/perfume-6.jpg";

const Catalog = () => {
  useReveal();

  const productos = [
    {
      img: p1,
      tipo: "EN STOCK",
      clase: "green",
      nombre: "Noir Absolu",
      categoria: "DISEÑADOR",
      precio: "$85",
      cantidad: "100ml",
      notas: "Oud, Vainilla, Ámbar"
    },
    {
      img: p2,
      tipo: "EN STOCK",
      clase: "green",
      nombre: "Fleur Délicate",
      categoria: "DISEÑADOR",
      precio: "$72",
      cantidad: "75ml",
      notas: "Jazmín, Peonía, Almizcle"
    },
    {
      img: p3,
      tipo: "POR ENCARGO",
      clase: "purple",
      nombre: "Ombre Intense",
      categoria: "NICHO",
      precio: "$120",
      cantidad: "100ml",
      notas: "Cuero, Tabaco, Bergamota"
    },
    {
      img: p4,
      tipo: "EN STOCK",
      clase: "green",
      nombre: "Ambre Royal",
      categoria: "NICHO",
      precio: "$95",
      cantidad: "50ml",
      notas: "Ámbar, Sándalo, Incienso"
    },
    {
      img: p5,
      tipo: "POR ENCARGO",
      clase: "purple",
      nombre: "Rose Eternelle",
      categoria: "DISEÑADOR",
      precio: "$68",
      cantidad: "100ml",
      notas: "Rosa, Lichi, Pachulí"
    },
    {
      img: p6,
      tipo: "EN STOCK",
      clase: "green",
      nombre: "Bleu Profond",
      categoria: "DISEÑADOR",
      precio: "$88",
      cantidad: "100ml",
      notas: "Vetiver, Cedro, Bergamota"
    }
  ];

  const [filtro, setFiltro] = useState("TODOS");

  const productosFiltrados =
    filtro === "TODOS"
      ? productos
      : productos.filter(p => p.tipo === filtro);
      const consultarWhatsApp = (producto) => {
  const numero = "50587663145"; // 👈 TU NÚMERO (sin +, sin espacios)

 const mensaje = `Hola, estoy interesado en la fragancia "${producto.nombre}" (${producto.cantidad}). Precio: ${producto.precio}. ¿Podrías brindarme más información?`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
};

  return (
    <section id="catalogo" className="catalog">
      
      <div className="catalog-header fade-up">
        <p className="small">COLECCIÓN</p>
        <h2>Nuestro Catálogo</h2>
        <p className="desc">
          Fragancias seleccionadas con cuidado: disponibles en stock o
          disponibles por encargo según tus gustos.
        </p>
      </div>

      <div className="filters fade-up delay-1">
        <button
          className={filtro === "TODOS" ? "active" : ""}
          onClick={() => setFiltro("TODOS")}
        >
          TODOS
        </button>

        <button
          className={filtro === "EN STOCK" ? "active" : ""}
          onClick={() => setFiltro("EN STOCK")}
        >
          EN STOCK
        </button>

        <button
          className={filtro === "POR ENCARGO" ? "active" : ""}
          onClick={() => setFiltro("POR ENCARGO")}
        >
          POR ENCARGO
        </button>
      </div>

      <div className="products">
        {productosFiltrados.map((p, i) => (
          <div className={`product fade-up delay-${i % 3}`} key={p.nombre}>
            <img src={p.img} alt={p.nombre} />

            <span className={`badge ${p.clase}`}>{p.tipo}</span>

            <div className="info">
              <p className="categoria">{p.categoria}</p>
              <h3>{p.nombre}</h3>

              <p className="detalle">
                Eau de Parfum · {p.cantidad}
              </p>

              <p className="notas">{p.notas}</p>

              <div className="bottom">
                <span className="precio">{p.precio}</span>
                <button 
  className="btn-main small"
  onClick={() => consultarWhatsApp(p)}
>
  Consultar
</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Catalog;