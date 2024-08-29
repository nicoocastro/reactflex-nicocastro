import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../servicios/firebaseConfig';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersCollection = collection(db, 'orders');
        const ordersSnapshot = await getDocs(ordersCollection);
        const ordersList = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOrders(ordersList);
      } catch (error) {
        console.error("Error al obtener el historial de pedidos:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Historial de Compras</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <h2>Pedido ID: {order.id}</h2>
            <p>Total: ${order.total}</p>
            <p>Fecha: {new Date(order.date).toLocaleDateString()}</p>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>{item.name} - ${item.price} x {item.quantity}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
