import React, { useState } from 'react';
import { OrderListPendingProps } from '../interfaces/OrdersListProps';
import { RiCloseLine } from 'react-icons/ri';

const OrderListPending: React.FC<OrderListPendingProps> = ({ orders }) => {
    const [openOrder, setOpenOrder] = useState<number | null>(null);

    return (
        <div className='flex flex-col items-center gap-2'>
            <h1 className='text-2xl font-bold text-slate-500'>
                Órdenes Pendientes
            </h1>
            {orders.map((order, index) => (
                <div
                    key={index}
                    className='flex flex-col items-center justify-center gap-4 rounded-md bg-royal-blue-600 p-2 font-semibold text-white'
                >
                    <div
                        className='flex cursor-pointer items-center justify-between gap-2'
                        onClick={() => {
                            setOpenOrder(openOrder === index ? null : index);
                            <RiCloseLine className='h-10 w-10 p-2' />;
                        }}
                    >
                        {openOrder === index
                            ? order.descripcion
                            : `${order.descripcion.split(' ').slice(0, 10).join(' ')}${order.descripcion.split(' ').length > 10 ? '...' : ''}`}
                        {openOrder === index && (
                            <RiCloseLine className='h-10 w-10 p-2' />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrderListPending;
