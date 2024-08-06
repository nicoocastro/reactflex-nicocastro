import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
  const { cart, getCartCount, getCartTotal, removeFromCart } = useCart();
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div style={{ position: 'relative' }}>
      <span 
        onClick={toggleCartVisibility} 
        style={{ fontSize: '1.5rem', cursor: 'pointer' }}
      >
        🛒 {}
      </span>
      <span 
        style={{ 
          position: 'absolute', 
          top: '-10px', 
          right: '-10px', 
          background: 'red', 
          borderRadius: '50%', 
          padding: '0.25rem 0.5rem', 
          color: 'white' 
        }}
      >
        {getCartCount()}
      </span>
      {isCartVisible && (
        <div 
          style={{ 
            position: 'absolute', 
            top: '2rem', 
            right: '0', 
            background: 'white', 
            border: '1px solid #ccc', 
            borderRadius: '8px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            width: '300px', 
            padding: '1rem', 
            zIndex: 1000 
          }}
        >
          <h4>Cart Items</h4>
          {cart.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: 'auto', borderRadius: '4px', marginRight: '0.5rem' }} />
                  <div style={{ flexGrow: 1 }}>
                    <p>{item.name}</p>
                    <p>{item.price} ARS</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    style={{ background: 'red', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Eliminar
                  </button>
                </div>
              ))}
              <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
                Total: {getCartTotal()} ARS
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartWidget;
