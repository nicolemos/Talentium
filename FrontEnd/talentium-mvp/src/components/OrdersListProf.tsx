import React, { useEffect, useState } from 'react';
import { Order, OrdersListProfProps } from '../interfaces/OrdersListProps';
import CustomButton from './CustomButton';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';
// import CreateOrdersClient from './CreateOrdersClient';

const OrdersListProf: React.FC<OrdersListProfProps> = ({ orders }) => {
    const navigate = useNavigate();
    const [ordersState, setOrdersState] = useState<Order[]>([]);
    const [openOrder, setOpenOrder] = useState<number | null>(null);

    useEffect(() => {
        const storedOrder = JSON.parse(localStorage.getItem('currentOrder') || '[]');
        setOrdersState(storedOrder);
    }, []);

    const createOrder = (
        descripcion: string,
        comentarios: string,
        precio: number,
    ) => {
        const newOrder: Order = {
            id: ordersState.length + 1,
            descripcion: descripcion,
            professional: 1,
            precio: precio,
            comentarios: comentarios,
            orderstatus: 'PENDIENTE',
        };

        setOrdersState((prevOrders) => [...prevOrders, newOrder]);
        console.log(newOrder);
    };

    const acceptOrder = (orderId: number) => {
        // Eliminar la orden aceptada de la lista
        setOrdersState((prevOrders) =>
            prevOrders.filter((order) => order.id !== orderId),
        );
    };

    const rejectOrder = (orderId: number) => {
        // Eliminar la orden rechazada de la lista
        setOrdersState((prevOrders) =>
            prevOrders.filter((order) => order.id !== orderId),
        );
    };

    const handleback = () => {
        navigate('/DashboardCliente/inicio');
    };

    return (
        <div className='flex max-w-[600px] flex-col items-center justify-center gap-4 overflow-auto rounded-md p-2 shadow-md'>
            <div className='flex'>
                <CustomButton
                    onClick={handleback}
                    customClass={
                        'z-50 absolute top-20 left-96 md:left-64 xl:left-72 w-24 text-white text-md md:text-xl font-bold cursor-pointer '
                    }
                >
                    <FaArrowLeft className='h-10 w-10 p-2' />
                    atrás
                </CustomButton>
            </div>
            <div className='flex items-center justify-center gap-4 '>
                <h1 className='text-2xl font-bold text-slate-500'>
                    Lista de Ordenes
                </h1>
            </div>
            <div className='flex max-h-[350px] flex-col items-center gap-2 overflow-auto '>     
                {ordersState.map((order, index) => (
                    <div
                    key={index}
                    className='flex flex-col items-center justify-center gap-4 rounded-md bg-royal-blue-600 p-2 font-semibold text-white'
                >    
                    <div
                        className='flex cursor-pointer items-center justify-between gap-2'
                        onClick={() => {
                            setOpenOrder(
                                openOrder === index ? null : index,
                            );
                            <RiCloseLine className='h-10 w-10 p-2' />;
                        }}
                    >
                        {openOrder === index
                            ? order.description
                            : `${order.description.split(' ').slice(0, 10).join(' ')}${order.description.split(' ').length > 10 ? '...' : ''}`}
                        {openOrder === index && (
                            <RiCloseLine className='h-10 w-10 p-2' />
                        )}
                    </div>
                    {openOrder === index && (
                        <div className='flex flex-col items-center gap-2 rounded-md bg-royal-blue-300 p-2 font-normal text-black'>
                            <textarea
                                className='rounded-md bg-royal-blue-100/50'
                                name='descripcion'
                                placeholder='comentario'
                                cols={30}
                                rows={4}
                                defaultValue={order.comentarios}
                            />
                            <input
                                type='number'
                                placeholder='$$$'
                                className=''
                            />
                            <CustomButton
                                onClick={() => {
                                    createOrder(
                                        order.descripcion,
                                        order.comentarios,
                                        order.precio,
                                    );
                                }}
                                customClass='flex align-center justify-center bg-royal-blue-600 lg:bg-royal-blue-500 rounded-md shadow-md px-2'
                            >
                                Comentar
                            </CustomButton>

                            <div className='font-semibold text-white'>
                                Estado: {order.orderstatus}
                            </div>
                            <div className='flex flex-row items-center justify-between gap-2'>
                                <CustomButton
                                    onClick={() => acceptOrder(order.id)}
                                    customClass='flex align-center justify-center bg-royal-blue-600 lg:bg-royal-blue-500 rounded-md shadow-md px-2'
                                >
                                    Aceptar
                                </CustomButton>
                                <CustomButton
                                    onClick={() => rejectOrder(order.id)}
                                    customClass='flex align-center justify-center bg-royal-blue-600 lg:bg-royal-blue-500 rounded-md shadow-md px-2'
                                >
                                    Rechazar
                                </CustomButton>
                            </div>
                        </div>
                    )}
                </div>
            ))}
                {orders.map((order, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center justify-center gap-4 rounded-md bg-royal-blue-600 p-2 font-semibold text-white'
                    >    
                        <div
                            className='flex cursor-pointer items-center justify-between gap-2'
                            onClick={() => {
                                setOpenOrder(
                                    openOrder === index ? null : index,
                                );
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
                        {openOrder === index && (
                            <div className='flex flex-col items-center gap-2 rounded-md bg-royal-blue-300 p-2 font-normal text-black'>
                                <textarea
                                    className='rounded-md bg-royal-blue-100/50'
                                    name='descripcion'
                                    placeholder='comentario'
                                    cols={30}
                                    rows={4}
                                    defaultValue={order.comentarios}
                                />
                                <input
                                    type='number'
                                    placeholder='$$$'
                                    className=''
                                />
                                <CustomButton
                                    onClick={() => {
                                        createOrder(
                                            order.descripcion,
                                            order.comentarios,
                                            order.precio,
                                        );
                                    }}
                                    customClass='flex align-center justify-center bg-royal-blue-600 lg:bg-royal-blue-500 rounded-md shadow-md px-2'
                                >
                                    Comentar
                                </CustomButton>

                                <div className='font-semibold text-white'>
                                    Estado: {order.orderstatus}
                                </div>
                                <div className='flex flex-row items-center justify-between gap-2'>
                                    <CustomButton
                                        onClick={() => acceptOrder(order.id)}
                                        customClass='flex align-center justify-center bg-royal-blue-600 lg:bg-royal-blue-500 rounded-md shadow-md px-2'
                                    >
                                        Aceptar
                                    </CustomButton>
                                    <CustomButton
                                        onClick={() => rejectOrder(order.id)}
                                        customClass='flex align-center justify-center bg-royal-blue-600 lg:bg-royal-blue-500 rounded-md shadow-md px-2'
                                    >
                                        Rechazar
                                    </CustomButton>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrdersListProf;
