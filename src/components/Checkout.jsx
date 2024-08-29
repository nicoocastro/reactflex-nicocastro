import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../servicios/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Aquí deberías manejar los datos del formulario y el proceso de pago
      // Para este ejemplo, solo guardamos el carrito en Firestore

      const order = {
        items: cart,
        total: getCartTotal(),
        createdAt: new Date()
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
    <div>
      <h1>Finalizar Compra</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Resumen del Pedido</h2>
          <p>Total: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(getCartTotal())}</p>
          <button type="submit" disabled={loading}>
            {loading ? 'Procesando...' : 'Confirmar Pedido'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
