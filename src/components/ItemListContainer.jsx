import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../servicios/firebaseConfig';

const ItemListContainer = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCol = collection(db, 'data');
        const q = category ? query(productsCol, where('category', '==', category)) : productsCol;
        const productSnapshot = await getDocs(q);
        const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setFilteredProducts(productList);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div>
      <h1>{category ? `Categoría: ${category}` : 'Todos los Productos'}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
