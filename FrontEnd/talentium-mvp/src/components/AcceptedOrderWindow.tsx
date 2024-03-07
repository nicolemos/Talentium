import React, { useState } from 'react';
import { Order, OrdersListProfProps } from '../interfaces/OrdersListProps';
import CustomButton from './CustomButton';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';
import ModalCancelled from './ModalCancelled';
import ModalCompleted from './ModalCompleted';

const AcceptedOrderWindow: React.FC<OrdersListProfProps> = ({ orders }) => {
    const navigate = useNavigate();
    const [ordersState, setOrdersState] = useState<Order[]>([]);
    const [openOrder, setOpenOrder] = useState<number | null>(null);
    const [cancelModalOpen, setCancelModalOpen] = useState(false);
    const [rateClientModalOpen, setRateClientModalOpen] = useState(false);

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
        setOrdersState((prevOrders) =>
            prevOrders.filter((order) => order.id !== orderId),
        );
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const rejectOrder = (orderId: number) => {
        // Mostrar el modal de confirmación para cancelar la orden
        setCancelModalOpen(true);
    };

    const cancelOrder = () => {
        // Cerrar el modal de confirmación y eliminar la orden
        setCancelModalOpen(false);
        setOrdersState((prevOrders) =>
            prevOrders.filter((order) => order.id !== openOrder),
        );
    };

    const markAsDone = () => {
        // Mostrar el modal de puntuación al cliente
        setRateClientModalOpen(true);
    };

    const rateClient = (rating: number) => {
    // Realizar otras acciones si es necesario con la calificación (por ejemplo, enviarla al servidor)
    console.log(`Calificación del cliente: ${rating}`);

    // Cerrar el modal de puntuación
    setRateClientModalOpen(false);
};

    // Datos del modal
    const NotifyCancellation = {
        title: '¿Está seguro de cancelar la orden?',
    };

    const NotifyRating = {
        title: '¿Cómo calificarías al cliente?',
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
                                        onClick={() => {
                                            acceptOrder(order.id);
                                            markAsDone();
                                        }}
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
            {/* Modal de confirmación para cancelar la orden */}
            <ModalCancelled
                isOpen={cancelModalOpen}
                onClose={() => setCancelModalOpen(false)}
                title={NotifyCancellation.title}
            >
                <div className='flex flex-row items-center justify-center gap-2'>
                    <CustomButton onClick={cancelOrder} customClass='flex'>
                        Sí, cancelar
                    </CustomButton>
                    <CustomButton
                        onClick={() => setCancelModalOpen(false)}
                        customClass='flex'
                    >
                        No, mantener
                    </CustomButton>
                </div>
            </ModalCancelled>

            {/* Modal para puntuar al cliente */}
            <ModalCompleted
                isOpen={rateClientModalOpen}
                onClose={() => setRateClientModalOpen(false)}
                title={NotifyRating.title}
            >
                <div className='text-center'>
                    {/* Agrega aquí los elementos necesarios para la puntuación */}
                    <CustomButton onClick={() => rateClient(5)}>5</CustomButton>
                    {/* ... (otros botones de puntuación) */}
                </div>
            </ModalCompleted>
        </div>
    );
};

export default AcceptedOrderWindow;