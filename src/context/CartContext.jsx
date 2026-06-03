import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Estado para guardar los productos del carrito
  const [cartItems, setCartItems] = useState(() => {
    // Intenta cargar el carrito guardado del almacenamiento local del navegador
    const localData = localStorage.getItem('vf_cart');
    return localData ? JSON.parse(localData) : [];
  });

  // Estado para abrir/cerrar el panel lateral desde cualquier lado
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Guardar en LocalStorage cada vez que cambie el carrito
  useEffect(() => {
    localStorage.setItem('vf_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Función para agregar un perfume
const addToCart = (product) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find((item) => item.id === product.id);
    if (existingItem) {
      // Si ya existe, mapea el arreglo y le suma 1 a la cantidad de ese ID
      return prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    // Si es nuevo, lo agrega con cantidad inicial de 1
    return [...prevItems, { ...product, quantity: 1 }];
  });
};

  // Función para eliminar un producto por completo
  const removeFromCart = (id) => {
  setCartItems((prevItems) =>
    prevItems.filter((item) => item.id !== id)
  );
};

const increaseQuantity = (id) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCartItems((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};

return (
  <CartContext.Provider
    value={{
      cartItems,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
    }}
  >
    {children}
  </CartContext.Provider>
);
};

// Hook personalizado para usar el carrito fácilmente
export const useCart = () => useContext(CartContext);