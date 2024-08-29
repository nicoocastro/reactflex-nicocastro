import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../servicios/firebaseConfig';

const ItemListContainer = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCol = collection(db, 'data'); // Cambia 'productos' a 'data'
        const productSnapshot = await getDocs(productsCol);
        const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Filtra los productos por categoría si es necesario
        if (category) {
          setFilteredProducts(productList.filter(product => product.category === category));
        } else {
          setFilteredProducts(productList);
        }
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
