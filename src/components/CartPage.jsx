import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import '../styles/cartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => {
  if (item.tipoOferta === "2x1") {
    const unidadesPagadas = Math.ceil(item.quantity / 2);
    return sum + unidadesPagadas * item.price;
  }

  return sum + item.price * item.quantity;
}, 0);

  const envio = subtotal > 0 ? 150 : 0;
  const total = subtotal + envio;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page-empty">
        <ShoppingBag size={64} className="empty-icon" />
        <h2>Tu carrito está vacío</h2>
        <p>Parece que aún no has añadido ninguna fragancia a tu colección.</p>
        <Link to="/catalogo" className="btn-back-store">
          Volver a la Tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <h1 className="cart-page-title">Tu Bolsa de Compras</h1>
      
      <div className="cart-page-content">
        {/* LISTA DE PRODUCTOS (IZQUIERDA) */}
        <div className="cart-page-items">
          <div className="table-header">
            <span>Producto</span>
            <span>Precio</span>
            <span>Cantidad</span>
            <span>Subtotal</span>
            <span></span>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="cart-page-item animate-fade">
              <div className="product-info">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <span className="product-category">Perfume Premium</span>
                </div>
              </div>
              
              <div className="product-price">
  {item.originalPrice && item.originalPrice > item.price ? (
    <>
      <span style={{
        textDecoration: "line-through",
        color: "#999",
        marginRight: "8px"
      }}>
        $ {item.originalPrice.toFixed(2)}
      </span>

      <span>
        $ {item.price.toFixed(2)}
      </span>
    </>
  ) : (
    <span>$ {item.price.toFixed(2)}</span>
  )}
</div>
              
              <div className="product-quantity">
                <span className="qty-value">{item.quantity}</span>
              </div>
              
              <div className="product-subtotal">
                $ {(item.price * item.quantity).toFixed(2)}
              </div>
              
              <div className="product-actions">
                <button onClick={() => removeFromCart(item.id)} className="btn-remove-page">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RESUMEN DE COMPRA (DERECHA) */}
        <div className="cart-page-summary">
          <h3>Resumen del Pedido</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>$ {subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Envío estimado</span>
            <span>$ {envio.toFixed(2)}</span>
          </div>
          <hr className="summary-divider" />
          <div className="summary-row total-row">
            <span>Total</span>
            <span>$ {total.toFixed(2)}</span>
          </div>
          
          <button className="btn-checkout-page">
            Proceder al Pago Seguro
          </button>
          
          <Link to="/catalogo" className="continue-shopping">
            ← Continuar Comprando
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;