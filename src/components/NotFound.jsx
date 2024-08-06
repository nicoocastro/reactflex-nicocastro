import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
