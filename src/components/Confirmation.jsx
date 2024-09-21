import React from 'react';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const { state } = location;
  const { orderId } = state || {};

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ color: '#28a745' }}>Compra Confirmada</h1>
      {orderId ? (
        <p style={{ fontSize: '1.2rem', margin: '1rem 0' }}>
          Tu compra ha sido confirmada con el ID de orden: <strong>{orderId}</strong>
        </p>
      ) : (
        <p style={{ color: 'red', fontSize: '1.2rem' }}>No se pudo confirmar la compra.</p>
      )}
      <div style={{ marginTop: '2rem' }}>
        <button 
          onClick={() => window.location.href='/'} 
          style={{ 
            padding: '0.5rem 1rem', 
            background: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
