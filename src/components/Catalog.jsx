import { useState } from "react";
import useReveal from "../hooks/useReveal";
import "../styles/catalog.css";
import { useLocation, useNavigate } from "react-router-dom";

import { ShoppingBag, X } from "lucide-react";
import { useCart } from "../context/CartContext";

import p1 from "../assets/perfume-1.jpg";
import p2 from "../assets/perfume-2.jpg";
import p3 from "../assets/perfume-3.jpg";
import p4 from "../assets/perfume-4.jpg";
import p5 from "../assets/perfume-5.jpg";
import p6 from "../assets/perfume-6.jpg";
import p7 from "../assets/perfume-7.jpg";
import p8 from "../assets/perfume-8.jpg";
import p9 from "../assets/perfume-9.jpg";
import p10 from "../assets/perfume-10.jpg";
import p11 from "../assets/perfume-11.jpg";
import p12 from "../assets/perfume-12.jpg";
import p13 from "../assets/perfume-13.jpg";
import p14 from "../assets/perfume-14.jpg";
import p15 from "../assets/perfume-15.jpg";
import p16 from "../assets/perfume-16.jpg";
import p17 from "../assets/perfume-17.jpg";
import p18 from "../assets/perfume-18.jpg";
import p19 from "../assets/perfume-19.jpg";
import p20 from "../assets/perfume-20.jpg";
import p21 from "../assets/perfume-21.jpg";
import p22 from "../assets/perfume-22.jpg";
import p23 from "../assets/perfume-23.jpg";
import p24 from "../assets/perfume-24.jpg";
import p25 from "../assets/perfume-25.jpg";
import p26 from "../assets/perfume-26.jpg";
import p27 from "../assets/perfume-27.jpg";
import p28 from "../assets/perfume-28.jpg";
import p29 from "../assets/perfume-29.jpg";
import p30 from "../assets/perfume-30.jpg";

// Etiquetas legibles para los filtros de género que vienen de Ofertas
const GENERO_LABELS = {
  floral:    "Perfumes Florales",
  nicho:     "Perfumes de Nicho",
  masculino: "Perfumes Masculinos",
  femenino:  "Perfumes Femeninos",
};

const BBDD_PRODUCTOS = [
  {
    id: 1,
    img: p1,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Noir Absolu",
    categoria: "DISEÑADOR",
    precio: 85,
    cantidad: "100ml",
    notas: "Citrico, Vainilla, Ámbar-Cálido",
    enOferta: false,
    generos: ["masculino"],
  },
  {
    id: 2,
    img: p2,
    tipo: "EN DESCUENTO",
    clase: "purple",
    nombre: "Fleur Dé Percher",
    categoria: "Diseñador",
    precio: 72,
    cantidad: "100ml",
    enOferta: true,
    descuento: 15,
    generos: ["femenino", "floral"],
  },
  {
    id: 3,
    img: p3,
    tipo: "EN DESCUENTO",
    clase: "purple",
    nombre: "Ombré Leather",
    categoria: "NICHO",
    precio: 120,
    cantidad: "100ml",
    notas: "Cuero, Tabaco, Bergamota",
    enOferta: true,
    tipoOferta: "2x1",
    generos: ["masculino", "nicho"],
  },
  {
    id: 4,
    img: p4,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Amber Oud Eau de Parfum",
    categoria: "NICHO",
    precio: 95,
    cantidad: "50ml",
    notas: "Ámbar, Sándalo, Talco",
    enOferta: false,
    generos: ["unisex", "nicho"],
  },
  {
    id: 5,
    img: p5,
    tipo: "POR ENCARGO",
    clase: "purple",
    nombre: "Nuit Tresor",
    categoria: "DISEÑADOR",
    precio: 68,
    cantidad: "75ml",
    notas: "Rosa negra, Lichi, Café",
    enOferta: true,
    descuento: 10,
    generos: ["femenino", "floral"],
  },
  {
    id: 6,
    img: p6,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Acqua di Gio",
    categoria: "DISEÑADOR",
    precio: 88,
    cantidad: "100ml",
    notas: "Vetiver, Cedro, Laúdano",
    enOferta: false,
    generos: ["masculino"],
  },
  {
    id: 7,
    img: p7,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Bleu de Chanel",
    categoria: "DISEÑADOR",
    precio: 145,
    cantidad: "100ml",
    notas: "Toronja, Menta, Incienso, Cedro",
    enOferta: false,
    generos: ["masculino"],
  },
  {
    id: 8,
    img: p8,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Sauvage Elixir",
    categoria: "DISEÑADOR",
    precio: 165,
    cantidad: "60ml",
    notas: "Canela, Nuez Moscada, Lavanda, Regaliz",
    enOferta: false,
    generos: ["masculino"],
  },
  {
    id: 9,
    img: p9,
    tipo: "POR ENCARGO",
    clase: "purple",
    nombre: "Acqua di Giò Profundo",
    categoria: "DISEÑADOR",
    precio: 125,
    cantidad: "75ml",
    notas: "Notas Marinas, Mandarina Verde, Romero, Alizcle",
    enOferta: false,
    generos: ["masculino"],
  },
  {
    id: 10,
    img: p10,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Y Eau de Parfum",
    categoria: "DISEÑADOR",
    precio: 130,
    cantidad: "100ml",
    notas: "Manzana, Jengibre, Salvia, Bergamota",
    enOferta: false,
    generos: ["masculino"],
  },
  {
    id: 11,
    img: p11,
    tipo: "EN DESCUENTO",
    clase: "purple",
    nombre: "Tobacco Vanille (Tom Ford)",
    categoria: "NICHO",
    precio: 295,
    cantidad: "50ml",
    notas: "Hojas de Tabaco, Vainilla, Cacao, Frutos Secos",
    enOferta: true,
    tipoOferta: "2x1",
    generos: ["unisex", "nicho"],
  },
  {
    id: 12,
    img: p12,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Club de Nuit Intense Man",
    categoria: "DISEÑADOR",
    precio: 55,
    cantidad: "105ml",
    notas: "Limón, Piña, Abedul, Almizcle, Ámbar Gris",
    enOferta: false,
    generos: ["masculino", "floral"],
  },
  {
    id: 13,
    img: p13,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Baccarat Rouge 540",
    categoria: "NICHO",
    precio: 325,
    cantidad: "70ml",
    notas: "Azafrán, Jazmín, Madera de Ámbar, Resina de Abeto",
    enOferta: false,
    generos: ["unisex", "nicho"],
  },
  {
    id: 14,
    img: p14,
    tipo: "POR ENCARGO",
    clase: "purple",
    nombre: "Cedrat Boise by Mancera",
    categoria: "NICHO",
    precio: 140,
    cantidad: "120ml",
    notas: "Grosellas Negras, Cítricos, Notas Sándalo, Cuero",
    enOferta: false,
    generos: ["femenino", "nicho"],
  },
  {
    id: 15,
    img: p15,
    tipo: "EN DESCUENTO",
    clase: "red",
    nombre: "Versace Eros",
    categoria: "DISEÑADOR",
    precio: 115,
    cantidad: "100ml",
    notas: "Menta, Manzana Verde, Limón Italiano, Habtonka",
    enOferta: true,
    descuento: 25,
    generos: ["masculino"],
  },
  {
    id: 16,
    img: p16,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "One Million Elixir (Paco Rabanne)",
    categoria: "DISEÑADOR",
    precio: 120,
    cantidad: "100ml",
    notas: "Manzana, Rosa de Damasco, Haba Tonka, Vainilla",
    enOferta: false,
    generos: ["masculino"],
  },
  {
    id: 17,
    img: p17,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Le Male Elixir (Jean Paul Gaultier)",
    categoria: "DISEÑADOR",
    precio: 135,
    cantidad: "125ml",
    notas: "Lavanda, Menta, Vainilla, Benzofuí, Miel",
    enOferta: false,
    generos: ["masculino"],
  },
  {
    id: 18,
    img: p18,
    tipo: "POR ENCARGO",
    clase: "purple",
    nombre: "Stronger With You Intensely (Armani)",
    categoria: "DISEÑADOR",
    precio: 110,
    cantidad: "100ml",
    notas: "Toffee, Canela, Gamuza, Vainilla, Pimienta Rosa",
    enOferta: false,
    generos: ["masculino"],
  },
  {
    id: 19,
    img: p19,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Libre Eau de Parfum (YSL)",
    categoria: "DISEÑADOR",
    precio: 140,
    cantidad: "90ml",
    notas: "Lavanda Francesa, Mandarina, Flor de Azahar, Vainilla",
    enOferta: false,
    generos: ["femenino", "floral"],
  },
  {
    id: 20,
    img: p20,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Good Girl (Carolina Herrera)",
    categoria: "DISEÑADOR",
    precio: 130,
    cantidad: "80ml",
    notas: "Almendra, Café, Nardo, Haba Tonka, Cacao",
    enOferta: false,
    generos: ["femenino"],
  },
  {
    id: 21,
    img: p21,
    tipo: "POR ENCARGO",
    clase: "purple",
    nombre: "The Most Wanted (Azzaro)",
    categoria: "DISEÑADOR",
    precio: 105,
    cantidad: "100ml",
    notas: "Cardamomo, Caramelo Toffee, Madera de Ámbar",
    enOferta: false,
    generos: ["masculino"],
  },
  {
    id: 22,
    img: p22,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Dior Homme Intense",
    categoria: "DISEÑADOR",
    precio: 150,
    cantidad: "100ml",
    notas: "Iris, Lavanda, Ambreta, Cedro de Virginia, Vetiver",
    enOferta: false,
    generos: ["masculino"],
  },
  {
    id: 23,
    img: p23,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Light Blue Intense (Dolce & Gabbana)",
    categoria: "DISEÑADOR",
    precio: 95,
    cantidad: "100ml",
    notas: "Limón Quinto, Manzana Verde, Caléndula, Almizcle",
    enOferta: false,
    generos: ["femenino", "floral"],
  },
  {
    id: 24,
    img: p24,
    tipo: "POR ENCARGO",
    clase: "purple",
    nombre: "Gisada Ambassador Men",
    categoria: "NICHO",
    precio: 160,
    cantidad: "100ml",
    notas: "Mango, Manzana, Cardamomo, Pachulí, Vainilla",
    enOferta: false,
    generos: ["masculino", "nicho"],
  },
  {
    id: 25,
    img: p25,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Layton (Parfums de Marly)",
    categoria: "NICHO",
    precio: 280,
    cantidad: "125ml",
    notas: "Manzana, Lavanda, Vainilla, Sándalo, Cardamomo",
    enOferta: false,
    generos: ["masculino", "nicho"],
  },
  {
    id: 26,
    img: p26,
    tipo: "EN DESCUENTO",
    clase: "purple",
    nombre: "Naxos (Xerjoff)",
    categoria: "NICHO",
    precio: 265,
    cantidad: "100ml",
    notas: "Miel, Tabaco, Lavanda, Vainilla, Bergamota, Canela",
    enOferta: true,
    tipoOferta: "descuento",
    generos: ["unisex", "nicho"],
  },
  {
    id: 27,
    img: p27,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Hacivat (Nishane)",
    categoria: "NICHO",
    precio: 210,
    cantidad: "100ml",
    notas: "Piña, Toronja, Bergamota, Cedro, Musgo de Roble",
    enOferta: false,
    generos: ["unisex", "nicho"],
  },
  {
    id: 28,
    img: p28,
    tipo: "POR ENCARGO",
    clase: "purple",
    nombre: "Creed Aventus",
    categoria: "NICHO",
    precio: 345,
    cantidad: "100ml",
    notas: "Piña, Abedul, Almizcle, Grosellas Negras, Bergamota",
    enOferta: false,
    generos: ["masculino", "nicho"],
  },
  {
    id: 29,
    img: p29,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Khamrah (Lattafa)",
    categoria: "DISEÑADOR",
    precio: 50,
    cantidad: "100ml",
    notas: "Canela, Caramelo, Haba Tonka, Vainilla, Amberwood",
    enOferta: false,
    generos: ["unisex"],
  },
  {
    id: 30,
    img: p30,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Instant Crush (Mancera)",
    categoria: "NICHO",
    precio: 135,
    cantidad: "120ml",
    notas: "Azafrán, Jengibre, Amberwood, Vainilla de Madagascar",
    enOferta: false,
    generos: ["femenino", "floral", "nicho"],
  },
];

const Catalog = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const [filtro, setFiltro] = useState("TODOS");
  const location = useLocation();
  const navigate = useNavigate();

  useReveal();

  // Leer params de URL
  const params = new URLSearchParams(location.search);
  const oferta = params.get("oferta");
  const generoParam = params.get("genero"); // "floral" | "nicho" | "masculino" | "femenino"

  const handleAddToBag = (product) => {
    const descuento = Number(product.descuento) || 0;
    const precioFinal = product.enOferta && descuento > 0
      ? Math.round(product.precio * (1 - descuento / 100))
      : product.precio;

    addToCart({
      id: product.id,
      name: product.nombre,
      price: precioFinal,
      originalPrice: descuento > 0 ? product.precio : undefined,
      tipoOferta: product.tipoOferta,
      image: product.img,
      size: product.cantidad,
    });

    setIsCartOpen(true);
  };

  // Limpiar el filtro de género y volver al catálogo normal
  const limpiarFiltroGenero = () => {
    navigate("/catalogo");
  };

  // Lógica de filtrado
  const productosFiltrados = BBDD_PRODUCTOS.filter((p) => {
    // Filtro por género (viene de Ofertas)
    if (generoParam) {
      return p.generos && p.generos.includes(generoParam);
    }

    // Filtro por oferta genérica
    if (oferta) {
      return p.enOferta || p.tipoOferta === "2x1";
    }

    // Filtros normales de disponibilidad
    return filtro === "TODOS" ? true : p.tipo === filtro;
  });

  const consultarWhatsApp = (producto) => {
    const numero = "50587663145";
    const descuento = Number(producto.descuento) || 0;
    const precioFinal = producto.enOferta && descuento > 0
      ? Math.round(producto.precio * (1 - descuento / 100))
      : producto.precio;

    const mensaje = `Hola, estoy interesado en la fragancia "${producto.nombre}" (${producto.cantidad}). Precio: $${precioFinal}. ¿Podrías brindarme más información?`;
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

      {/* BANNER DE FILTRO ACTIVO — Diseño C (Tarjeta con ícono) */}
      {generoParam && GENERO_LABELS[generoParam] && (
        <div className="catalog-filter-banner fade-up">
          <div className="catalog-filter-banner-inner">

            {/* Izquierda: ícono + textos */}
            <div className="catalog-filter-left">
              <div className="catalog-filter-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 3h6l1 4H8L9 3z"/>
                  <rect x="6" y="7" width="12" height="13" rx="2"/>
                  <path d="M12 3v-1"/>
                  <circle cx="12" cy="2" r="1"/>
                </svg>
              </div>
              <div className="catalog-filter-meta">
                <p className="catalog-filter-label">Filtro activo · Ofertas</p>
                <p className="catalog-filter-name">{GENERO_LABELS[generoParam]}</p>
                <p className="catalog-filter-count">
                  {productosFiltrados.length} fragancia{productosFiltrados.length !== 1 ? "s" : ""} disponible{productosFiltrados.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>

            {/* Botón limpiar */}
            <button
              className="catalog-filter-clear"
              onClick={limpiarFiltroGenero}
              aria-label="Quitar filtro y ver todo el catálogo"
            >
              <X size={13} />
              Ver todo
            </button>

          </div>
        </div>
      )}

      {/* Filtros normales: solo se muestran si NO hay filtro de género activo */}
      {!generoParam && !oferta && (
        <div className="filters fade-up delay-1">
          {["TODOS", "EN STOCK", "POR ENCARGO"].map((tipoFiltro) => (
            <button
              key={tipoFiltro}
              className={filtro === tipoFiltro ? "active" : ""}
              onClick={() => setFiltro(tipoFiltro)}
            >
              {tipoFiltro}
            </button>
          ))}
        </div>
      )}

      {/* Mensaje si no hay productos */}
      {productosFiltrados.length === 0 && (
        <div className="catalog-empty fade-up">
          <p>No encontramos fragancias en esta categoría.</p>
          <button className="catalog-empty-btn" onClick={limpiarFiltroGenero}>
            Ver todo el catálogo
          </button>
        </div>
      )}

      <div className="products">
        {productosFiltrados.map((p, i) => {
          const descuento = Number(p.descuento) || 0;
          const tieneDescuento = p.enOferta && descuento > 0;
          const precioConDescuento = tieneDescuento
            ? Math.round(p.precio * (1 - descuento / 100))
            : p.precio;

          return (
            <div className={`product fade-up delay-${i % 3}`} key={p.id}>
              <div className="product-img-container">
                <img src={p.img} alt={p.nombre} />
                {p.tipoOferta === "2x1" ? (
                  <span className="badge-discount">2x1</span>
                ) : tieneDescuento ? (
                  <span className="badge-discount">-{p.descuento}%</span>
                ) : null}
              </div>

              <span className={`badge ${p.clase}`}>{p.tipo}</span>

              <div className="info">
                <p className="categoria">{p.categoria}</p>
                <h3>{p.nombre}</h3>
                <p className="detalle">Eau de Parfum · {p.cantidad}</p>
                <p className="notas">{p.notas}</p>

                <div className="bottom">
                  <div className="precio-container">
                    {p.tipoOferta === "2x1" ? (
                      <span className="precio">${p.precio}</span>
                    ) : tieneDescuento ? (
                      <>
                        <span className="precio-original">${p.precio}</span>
                        <span className="precio-oferta">
                          ${precioConDescuento}
                        </span>
                      </>
                    ) : (
                      <span className="precio">${p.precio}</span>
                    )}
                  </div>
                </div>

                <div className="product-actions">
                  <button
                    className="btn-main small"
                    onClick={() => consultarWhatsApp(p)}
                  >
                    Consultar
                  </button>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToBag(p)}
                  >
                    <ShoppingBag size={16} />
                    <span>Agregar</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Catalog;