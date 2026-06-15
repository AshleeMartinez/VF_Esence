import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, ShoppingBag, Lock } from 'lucide-react';
import '../styles/cartSidebar.css';

const CartSidebar = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const subtotal = cartItems.reduce((sum, item) => {
    const itemPrice = Number(item.price) || 0;
    const itemQuantity = item.quantity || 0;
    const subtotalItem = item.tipoOferta === "2x1"
      ? Math.ceil(itemQuantity / 2) * itemPrice
      : itemPrice * itemQuantity;
    return sum + subtotalItem;
  }, 0);
  const envio = subtotal > 0 && subtotal < 400 ? 12 : 0;
  const total = subtotal + envio;
  const freeShipThreshold = 400;
  const progress = Math.min((subtotal / freeShipThreshold) * 100, 100);
  const remaining = (freeShipThreshold - subtotal).toFixed(2);

  return (
    <>
      <div
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />

      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>

        {/* HEADER */}
        <div className="cs-header">
          <div className="cs-header-left">
            <ShoppingBag size={16} className="cs-bag-icon" />
            <h2 className="cs-title">
              Tu Carrito
              <span className="cs-badge">{cartItems.reduce((s, i) => s + i.quantity, 0)} items</span>
            </h2>
          </div>
          <button className="cs-close" onClick={() => setIsCartOpen(false)} aria-label="Cerrar carrito">
            <X size={16} />
          </button>
        </div>

        {/* BODY */}
        <div className="cs-body">
          {cartItems.length === 0 ? (
            <div className="cs-empty">
              <ShoppingBag size={44} className="cs-empty-icon" />
              <p className="cs-empty-title">Tu carrito está vacío</p>
              <span className="cs-empty-sub">Explora nuestro catálogo para añadir fragancias.</span>
            </div>
          ) : (
            <div className="cs-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cs-item">
                  <div className="cs-item-img">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="cs-item-info">
                    <p className="cs-item-name">{item.name}</p>
                    <p className="cs-item-meta">{item.size}</p>

                    <div className="cs-qty">
                      <button
                        className="cs-qty-btn"
                        onClick={() => decreaseQuantity(item.id)}
                        aria-label="Reducir cantidad"
                      >
                        −
                      </button>
                      <span className="cs-qty-num">{item.quantity}</span>
                      <button
                        className="cs-qty-btn"
                        onClick={() => increaseQuantity(item.id)}
                        aria-label="Aumentar cantidad"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="cs-item-right">
                    <span className="cs-item-price">$ {(() => {
                      const itemPrice = Number(item.price) || 0;
                      const itemQuantity = item.quantity || 0;
                      const subtotalItem = item.tipoOferta === "2x1"
                        ? Math.ceil(itemQuantity / 2) * itemPrice
                        : itemPrice * itemQuantity;
                      return subtotalItem.toFixed(2);
                    })()}</span>
                    <button
                      className="cs-delete"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Eliminar producto"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER */}
        {cartItems.length > 0 && (
          <div className="cs-footer">
            {subtotal < freeShipThreshold ? (
              <div className="cs-ship-progress">
                <p className="cs-ship-text">
                  Envío gratis al llegar a $400 · te faltan <strong>${remaining}</strong>
                </p>
                <div className="cs-ship-bar">
                  <div className="cs-ship-fill" style={{ width: `${progress}%` }} />
                </div>
              </div>
            ) : (
              <div className="cs-ship-free">¡Envío gratuito aplicado! 🎉</div>
            )}

            <div className="cs-summary">
              <div className="cs-summary-row">
                <span>Subtotal</span>
                <span>$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="cs-summary-row">
                <span>Envío estimado</span>
                <span>{envio === 0 ? 'Gratis' : `$ ${envio.toFixed(2)}`}</span>
              </div>
            </div>

            <div className="cs-total-row">
              <span className="cs-total-label">Total</span>
              <span className="cs-total-val">$ {total.toFixed(2)}</span>
            </div>

            <button className="cs-checkout-btn">Proceder al Pago</button>

            <p className="cs-secure">
              <Lock size={11} style={{ marginRight: 5, verticalAlign: 'middle' }} />
              Pago seguro garantizado
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;