import { Link } from 'react-router-dom';

const GeneralWindowClient = () => {
    return (
        <div className='flex max-w-[800px] flex-row flex-wrap items-center justify-center gap-4 border p-4'>
            {/* Primer enlace con texto */}
            <Link to='/CreateOrderClient'>
                <div className='flex h-40 w-60 items-center justify-center rounded-md bg-royal-blue-700 text-white shadow-md hover:bg-royal-blue-500'>
                    Crear Orden
                </div>
            </Link>
            {/* Si quieres agregar otro componente dentro de Link, simplemente colócalo dentro. Ejemplo con texto plano: */}
            <Link to='/OrderListClient'>
                <div className='flex h-40 w-60 items-center justify-center rounded-md bg-royal-blue-700 text-white shadow-md hover:bg-royal-blue-500'>
                    Lista de Ordenes
                </div>
            </Link>
        </div>
    );
};

export default GeneralWindowClient;
