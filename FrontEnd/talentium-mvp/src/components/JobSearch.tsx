import React, { useState } from 'react';
import OrdenCard from './OrdenClient';
import { Order } from "../interfaces/OrdersProps";

//filtro de busqueda por categoria de especialidad

interface FilterOptionsProps {
  onFilterChange: (selectedFilter: string | null) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ onFilterChange }) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value === 'todos' ? null : event.target.value);
  };

  return (
    <div>
      <label htmlFor="filter" className='m-2'>Filtra trabajos</label>
      <select id="filter" className='bg-white/60 w-60 p-1 m-3 rounded-md shadow-md' onChange={handleFilterChange}>
        <option value="todos">Todos</option>
        <option value="Abogado">Abogado</option>
        <option value="Plomero">Plomero</option>
        <option value="Ingeniero">Ingeniero</option>
        <option value="Jardinero">Jardinero</option>
        <option value="Electricista">Electricista</option>
      </select>
    </div>
  );
};
//--------//

interface OrdenListProps {
  orders: Order[];
}

const OrdenList: React.FC<OrdenListProps> = ({ orders }) => {
  return (
    <div>
      {orders.map(order => (
        <OrdenCard key={order.cliente_id} orden={order} />
      ))}
    </div>
  );
};

const JobSearchApp: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const orders: OrdenData[]= [
    {
      id: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non scelerisque leo. Donec leo massa, convallis eu orci eget, hendrerit suscipit velit. Suspendisse a vestibulum lacus,',
      profecional: 'Abogado',
      precio: 100,
      fecha: '01/01/2024',
      estado: 'INICIAL',
      cliente_id: 1,
    },
    {
      id: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non scelerisque leo. Donec leo massa, convallis eu orci eget, hendrerit suscipit velit. Suspendisse a vestibulum lacus,',
      profecional: 'Plomero',
      precio: 150,
      fecha: '02/01/2024',
      estado: 'EN PROGRESO',
      cliente_id: 2,
    }, 
  ];

  const filteredOrders = filter ? orders.filter(order => order.profecional === filter) : orders;

  const handleFilterChange = (selectedFilter: string | null) => {
    setFilter(selectedFilter);
  };

  return (
    <div>
      <FilterOptions onFilterChange={handleFilterChange} />
      <OrdenList orders={filteredOrders} />
    </div>
  );
};

export default JobSearchApp;