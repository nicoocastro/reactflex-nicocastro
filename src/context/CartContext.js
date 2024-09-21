import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log('Producto añadido:', product);
    if (typeof product.price !== 'number') {
      console.error('El precio no es un número válido:', product.price);
    }
    setCart(prevCart => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const getCartCount = () => cart.length;

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  // Aquí se agrega la función clearCart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartCount, getCartTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
