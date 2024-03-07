import React from 'react';
import { OrderForm } from "../interfaces/OrderForm";

interface OrdenCardProps {
  orden: OrderForm;
}

//Aqui se renderiza los datos de la orden

const OrdenCard: React.FC<OrdenCardProps> = ({ orden }) => {
  return (
    <div className="orden-card bg-white/60 w-60 p-3 m-3 rounded-md shadow-md md:w-1/3">
        <p><strong>Profesional:</strong> {orden.profesional}</p>
        <p><strong>Precio:</strong> {orden.precio}</p>
        <p><strong>Fecha:</strong> {orden.fecha}</p>
        <p className='mt-5'><strong>Descripcion</strong> <br/> {orden.description}</p>
    </div>
  );
};

export default OrdenCard;