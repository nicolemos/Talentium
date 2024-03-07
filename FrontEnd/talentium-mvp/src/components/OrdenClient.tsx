import React from 'react';
import { Order } from "../interfaces/OrdersProps";

interface OrdenCardProps {
  orden: Order;
}

//Aqui se renderiza los datos de la orden

const OrdenCard: React.FC<OrdenCardProps> = ({ orden }) => {
  return (
    <div className="orden-card bg-white/60 w-60 p-3 m-3 rounded-md shadow-md md:w-1/3">
        <p><strong>Profesional:</strong> {orden.proffesional}</p>
        <p><strong>Precio:</strong> {orden.price}</p>
        <p><strong>Fecha:</strong> {orden.date}</p>
        <p className='mt-5'><strong>Descripcion</strong> <br/> {orden.description}</p>
    </div>
  );
};

export default OrdenCard;