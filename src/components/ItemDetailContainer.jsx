import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../servicios/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const productDoc = doc(db, 'data', productId);
      const docSnap = await getDoc(productDoc);
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log('No such document!');
      }
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
