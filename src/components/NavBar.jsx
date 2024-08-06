import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#282c34', color: 'white' }}>
      <div className="logo">
        <h1>CASTECH</h1>
      </div>
      <div className="nav-links">
        <Link to="/" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>Inicio</Link>
        <Link to="/category/Computadoras" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>Computadoras</Link>
        <Link to="/category/Hardware" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>Hardware</Link>
        <Link to="/about-us" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>Sobre Nosotros</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
