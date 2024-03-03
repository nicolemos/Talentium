import React, { useState } from 'react';
import { Order, CreateOrdersProps } from '../interfaces/OrdersProps';

const CreateOrders: React.FC<CreateOrdersProps> = ({ cliente }) => {
    const [orden, setOrden] = useState<Order>({
        description: "nueva orden test",
        cliente_id: cliente.clienteId,
        date: '03/03/2024',
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOrden({ ...orden, description: e.target.value });
    };

    const handleSubmit = () => {
        console.log('Orden:', orden);
    };

    return (
        <div id="CrearOrden">
            <textarea
                name="descripcion"
                placeholder="Escribe la descripción de la orden aquí..."
                cols={30}
                rows={8}
                value={orden.description}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Crear Orden</button>
        </div>
    );
};

export default CreateOrders;
