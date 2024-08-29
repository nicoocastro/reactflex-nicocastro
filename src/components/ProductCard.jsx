import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';


const ProductCard = ({ product }) => {
const { addToCart } = useCart();

const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR').format(price);
};

return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px', textAlign: 'center' }}>
    <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>Precio: ${formatPrice(product.price)}</p>
    <button 
        onClick={() => addToCart(product)} 
        style={{ padding: '0.5rem 1rem', border: 'none', background: '#007bff', color: 'white', borderRadius: '4px', cursor: 'pointer' }}
    >
        Añadir al carrito
    </button>
    <Link to={`/product/${product.id}`} style={{ display: 'block', marginTop: '0.5rem' }}>
        Ver detalles
    </Link>
    </div>
);
};

export default ProductCard;
