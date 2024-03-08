import React, { useState } from 'react';
import { Order, CreateOrdersProps } from '../interfaces/OrdersProps';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import { FaArrowLeft } from 'react-icons/fa';
import useOrderServices from '../hooks/userOrderServices';
//import useCreateUser from '../hooks/useUserServices';

const CreateOrdersClient: React.FC<CreateOrdersProps> = ({ cliente }) => {
  const navigate = useNavigate();
  const {createOrder} = useOrderServices()
  //const {getClient} = useCreateUser()

    const [orden, setOrden] = useState<Order>({
        description: '',
        cliente_id: cliente.clienteId
    });

  /*  const getClietId = async (orden:Order) =>{
        await getClient(orden.cliente_id)
    }
*/


  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOrden({ ...orden, description: e.target.value });
    };

    const handleSubmit = () => {
        setShowSuccessMessage(true);
        localStorage.setItem('currentOrder', JSON.stringify(orden));
        
        const storedOrders = JSON.parse(localStorage.getItem('currentOrders') || '[]');
        storedOrders.push(orden);
        localStorage.setItem('currentOrder', JSON.stringify(storedOrders));

        setTimeout(() => {
            setShowSuccessMessage(false);
            navigate('/dashboardcliente/inicio');
        }, 2000);
        createOrder(orden);
    };

    const handleback = () => {
        navigate('/DashboardCliente/inicio');
    };

    return (
        <div className='flex flex-col items-center justify-center gap-4 p-4'>
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
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-center text-2xl font-bold text-slate-600'>
                    Nueva Orden
                </h1>
                <textarea
                    className='flex flex-col rounded-md bg-royal-blue-100/50 shadow-md '
                    name='descripcion'
                    placeholder='Escribe la descripción de la orden aquí...'
                    cols={30}
                    rows={8}
                    value={orden.description}
                    onChange={handleChange}
                />
            </div>
            <div>
                {showSuccessMessage && (
                    <p className='ml-2 text-center'>
                        Orden creada exitosamente!
                    </p>
                )}
                <CustomButton
                    onClick={handleSubmit}
                    customClass='flex align-center justify-center bg-royal-blue-600 lg:bg-royal-blue-500 rounded-md shadow-md p-2'
                >
                    Crear Orden
                </CustomButton>
            </div>
        </div>
    );
};

export default CreateOrdersClient;
