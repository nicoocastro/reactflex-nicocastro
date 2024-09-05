import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail';
import CartWidget from './components/CartWidget';
import AboutUs from './components/AboutUs';
import NotFound from './components/NotFound';
import Checkout from './components/Checkout'; 
import Confirmation from './components/Confirmation'; 
import OrderHistory from './components/OrderHistory'; 
import { CartProvider } from './context/CartContext';
//importamos todo
const App = () => {
  return (
    <Router>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} /> {/* Ruta para finalizar compra */}
          <Route path="/confirmation" element={<Confirmation />} /> {/* Ruta para confirmación */}
          <Route path="/order-history" element={<OrderHistory />} /> {/* Ruta para historial de compras */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} /> {/* Ruta para 404 */}
        </Routes>
        <CartWidget />
      </CartProvider>
    </Router>
  );
};

export default App;
