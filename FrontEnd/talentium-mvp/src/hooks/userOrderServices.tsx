import { useState } from 'react';
import { OrderForm } from '../interfaces/OrderForm'

const useOrderServices = () => {
  const [isLoading, setIsLoading] = useState(false);
   const [orders, setOrders] = useState([]);


    const createOrder = async (orderData: OrderForm) => {
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8080/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                throw new Error('Error al crear la orden');
            }

            setIsLoading(false);

            return true;
        } catch (error) {
            setIsLoading(false);
          console.error('Error al crear la orden:', error)
          return false
        }
  };
  
  const getOrders = async () => {
    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:8080/order');
      if (!response.ok) {
        throw new Error('Error al obtener la lista de órdenes')
      }

      const data = await response.json()
      setOrders(data.orders)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error('Error al obtener la lista de órdenes:', error)
    }
  }

    return { createOrder, getOrders, isLoading, orders  };
};

export default useOrderServices;
