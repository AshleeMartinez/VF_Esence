import { useState } from "react";
import useReveal from "../hooks/useReveal";
import "../styles/catalog.css";

import { ShoppingBag } from "lucide-react";
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
    enOferta: false
  },
  {
    id: 2,
    img: p2,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Fleur Dé Percher",
    categoria: "DISEÑADOR",
    precio: 72,
    cantidad: "75ml",
    notas: "Jazmín, Peonía, Almizcle",
    enOferta: false,
    descuento: 15
  },
  {
    id: 3,
    img: p3,
    tipo: "POR ENCARGO",
    clase: "purple",
    nombre: "Ombré Leather",
    categoria: "NICHO",
    precio: 120,
    cantidad: "100ml",
    notas: "Cuero, Tabaco, Bergamota",
    enOferta: false
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
    enOferta: false
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
    enOferta: false,
    descuento: 10
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
    enOferta: false
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
    enOferta: false
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
    enOferta: false
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
    enOferta: false
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
    enOferta: false
  },
  {
    id: 11,
    img: p11,
    tipo: "POR ENCARGO",
    clase: "purple",
    nombre: "Tobacco Vanille (Tom Ford)",
    categoria: "NICHO",
    precio: 295,
    cantidad: "50ml",
    notas: "Hojas de Tabaco, Vainilla, Cacao, Frutos Secos",
    enOferta: false
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
    enOferta: false
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
    enOferta: false
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
    enOferta: false
  },
  {
    id: 15,
    img: p15,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Versace Eros",
    categoria: "DISEÑADOR",
    precio: 115,
    cantidad: "100ml",
    notas: "Menta, Manzana Verde, Limón Italiano, Habtonka",
    enOferta: false
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
    enOferta: false
  },
  {
    id: 17,
    img: p17,
    tipo: "EN STOCK",
    clase: "green",
    nombre: "Le Male Elixir (Jean Paul Gaultier)",
    categoria: "DISEDSADOR",
    precio: 135,
    cantidad: "125ml",
    notas: "Lavanda, Menta, Vainilla, Benzofuí, Miel",
    enOferta: false
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
    enOferta: false
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
    enOferta: false
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
    enOferta: false
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
    enOferta: false
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
    enOferta: false
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
    enOferta: false
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
    enOferta: false
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
    enOferta: false
  },
  {
    id: 26,
    img: p26,
    tipo: "POR ENCARGO",
    clase: "purple",
    nombre: "Naxos (Xerjoff)",
    categoria: "NICHO",
    precio: 265,
    cantidad: "100ml",
    notas: "Miel, Tabaco, Lavanda, Vainilla, Bergamota, Canela",
    enOferta: false
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
    enOferta: false
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
    enOferta: false
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
    notas: "Canela, Canela, Caramelo, Haba Tonka, Vainilla, Amberwood",
    enOferta: false
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
    enOferta: false
  }
];

const Catalog = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const [filtro, setFiltro] = useState("TODOS");

  useReveal();

  const handleAddToBag = (product) => {
    const precioFinal = product.enOferta 
      ? Math.round(product.precio * (1 - product.descuento / 100))
      : product.precio;

    addToCart({
      id: product.id,
      name: product.nombre,
      price: precioFinal,
      image: product.img,
      size: product.cantidad
    });
    
    setIsCartOpen(true);
  };

  const productosFiltrados =
    filtro === "TODOS"
      ? BBDD_PRODUCTOS
      : BBDD_PRODUCTOS.filter((p) => p.tipo === filtro);

  const consultarWhatsApp = (producto) => {
    const numero = "50587663145";
    const precioFinal = producto.enOferta 
      ? Math.round(producto.precio * (1 - producto.descuento / 100))
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

      <div className="products">
        {productosFiltrados.map((p, i) => {
          const tieneDescuento = p.enOferta;
          const precioConDescuento = tieneDescuento
            ? Math.round(p.precio * (1 - p.descuento / 100))
            : p.precio;

          return (
            <div className={`product fade-up delay-${i % 3}`} key={p.id}>
              <div className="product-img-container">
                <img src={p.img} alt={p.nombre} />
                {tieneDescuento && (
                  <span className="badge-discount">-{p.descuento}%</span>
                )}
              </div>

              <span className={`badge ${p.clase}`}>{p.tipo}</span>

              <div className="info">
                <p className="categoria">{p.categoria}</p>
                <h3>{p.nombre}</h3>
                <p className="detalle">Eau de Parfum · {p.cantidad}</p>
                <p className="notas">{p.notas}</p>

                <div className="bottom">
                  <div className="precio-container">
                    {tieneDescuento ? (
                      <>
                        <span className="precio-original">${p.precio}</span>
                        <span className="precio-oferta">${precioConDescuento}</span>
                      </>
                    ) : (
                      <span className="precio">${p.precio}</span>
                    )}
                  </div>
                </div>

                <div className="product-actions">
                  <button className="btn-main small" onClick={() => consultarWhatsApp(p)}>
                    Consultar
                  </button>
                  <button className="add-to-cart-btn" onClick={() => handleAddToBag(p)}>
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