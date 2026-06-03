import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2 } from 'lucide-react';
import '../styles/cartSidebar.css';

const CartSidebar = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart } = useCart();

  // Calcular el total de la compra
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Fondo oscuro traslúcido (Overlay) cuando el carro está abierto */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`} 
        onClick={() => setIsCartOpen(false)} 
      />

      {/* Contenedor del panel deslizante */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Tu Carrito <span>({cartItems.length})</span></h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Tu carrito está vacío.</p>
              <span>Explora nuestro catálogo para añadir fragancias.</span>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item animate-item">
                  <img src={item.image} alt={item.name} className="item-img" />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p className="item-price">C$ {item.price} x {item.quantity}</p>
                  </div>
                  <button className="delete-btn" onClick={() => removeFromCart(item.id)}>
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>$ {total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">
              Proceder al Pago
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;