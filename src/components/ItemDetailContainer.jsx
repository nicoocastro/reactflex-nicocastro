import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data'; 

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    // Simulando llamada a API
    const fetchProduct = async () => {
      const foundProduct = products.find(prod => prod.id === parseInt(productId));
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <div>Cargando...</div>;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <button>Añadir al Carrito</button>
    </div>
  );
};

export default ItemDetailContainer;
