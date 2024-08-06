// En ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products.find((p) => p.id === parseInt(id)));
        }, 1000);
      });
    };

    fetchProduct().then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <p>Cargando...</p>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} style={{ width: '300px', height: 'auto', borderRadius: '8px' }} />
      <p>{product.description}</p>
      <p>Categoría: {product.category}</p>
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />
      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
};

export default ProductDetail;
