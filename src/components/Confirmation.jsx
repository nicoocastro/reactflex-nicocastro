import React from 'react';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const { state } = location;
  const { orderId } = state || {};

  return (
    <div>
      <h1>Compra Confirmada</h1>
      {orderId ? (
        <p>Tu compra ha sido confirmada con el ID de orden: {orderId}</p>
      ) : (
        <p>No se pudo confirmar la compra.</p>
      )}
    </div>
  );
};

export default Confirmation;
