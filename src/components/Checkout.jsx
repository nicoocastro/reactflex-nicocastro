import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../servicios/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [customerData, setCustomerData] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const order = {
        items: cart,
        total: getCartTotal(),
        customer: customerData, // Agregando datos del cliente
        createdAt: new Date(),
      };

      const docRef = await addDoc(collection(db, 'orders'), order);

      // Limpia el carrito
      clearCart();

      // Redirige a la página de confirmación con el ID del pedido
      navigate('/confirmation', { state: { orderId: docRef.id } });

    } catch (error) {
      console.error('Error al crear la orden:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Finalizar Compra</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Nombre:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={customerData.name} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} 
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={customerData.email} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} 
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="phone">Teléfono:</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={customerData.phone} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} 
          />
        </div>
        <div>
          <h2>Resumen del Pedido</h2>
          <p>Total: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(getCartTotal())}</p>
          <button type="submit" disabled={loading} style={{ padding: '0.5rem', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            {loading ? 'Procesando...' : 'Confirmar Pedido'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
