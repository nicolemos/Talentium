import { Link } from 'react-router-dom';

const OrdersWindow = () => {
    return (
        <div className='flex max-w-[800px] flex-row flex-wrap items-center justify-center gap-4 p-4'>

            <Link to='/Dashboardcliente/Ordenes/nueva-orden'>
                <div className='flex h-40 w-60 items-center justify-center rounded-md bg-royal-blue-700 text-white shadow-md hover:bg-royal-blue-500'>
                    Crear Orden
                </div>
            </Link>
            
            <Link to='/Dashboardcliente/Ordenes/lista'>
                <div className='flex h-40 w-60 items-center justify-center rounded-md bg-royal-blue-700 text-white shadow-md hover:bg-royal-blue-500'>
                    Lista de Ordenes
                </div>
            </Link>
        </div>
    );
};

export default OrdersWindow;
