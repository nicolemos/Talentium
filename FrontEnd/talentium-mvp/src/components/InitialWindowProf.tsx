import { Link, useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import { FaArrowLeft } from 'react-icons/fa';

const InitialWindowProf = () => {
    const navigate = useNavigate();

   const handleLinkClick = (link: string) => {
     navigate(link);
   };
    return (
        <div className='flex max-h-[350px] max-w-[800px] p-2'>
            <div className='flex'>
                <CustomButton
                    onClick={() => navigate('/DashboardCliente/inicio')}
                    customClass={
                        'z-50 absolute top-[85px] md:top-[65px] right-[15px] md:left-[245px] w-24 text-white text-md md:text-xl font-bold cursor-pointer '
                    }
                >
                    <FaArrowLeft className='h-10 w-10 p-2' />
                    atrás
                </CustomButton>
            </div>
            <div className='flex max-h-[350px] max-w-[800px] flex-row flex-wrap items-center justify-center gap-4 overflow-auto p-2 md:h-full md:overflow-hidden'>
                <Link to='/DashboardCliente/Datos'>
                    <div
                        className='flex h-40 w-60 items-center justify-center rounded-md bg-royal-blue-700 text-white shadow-md hover:bg-royal-blue-500'
                        onClick={() =>
                            handleLinkClick('/DashboardCliente/Datos')
                        }
                    >
                        Perfil
                    </div>
                </Link>

                <Link to='/DashboardCliente/Ordenes'>
                    <div
                        className='flex h-40 w-60 items-center justify-center rounded-md bg-royal-blue-700 text-white shadow-md hover:bg-royal-blue-500'
                        onClick={() =>
                            handleLinkClick('/DashboardCliente/Ordenes')
                        }
                    >
                        Lista de Ordenes
                    </div>
                </Link>

                <Link to='/DashboardCliente/Ordenes'>
                    <div
                        className='flex h-40 w-60 items-center justify-center rounded-md bg-royal-blue-700 text-white shadow-md hover:bg-royal-blue-500'
                        onClick={() =>
                            handleLinkClick('/DashboardCliente/Ordenes')
                        }
                    >
                        Crear Orden
                    </div>
                </Link>

                <Link to='/DashboardCliente/Agenda'>
                    <div
                        className='flex h-40 w-60 items-center justify-center rounded-md bg-royal-blue-700 text-white shadow-md hover:bg-royal-blue-500'
                        onClick={() =>
                            handleLinkClick('/DashboardCliente/Agenda')
                        }
                    >
                        Ordenes Aceptadas
                    </div>
                </Link>

                <Link to='/DashboardCliente/Agenda'>
                    <div
                        className='flex h-40 w-60 items-center justify-center rounded-md bg-royal-blue-700 text-white shadow-md hover:bg-royal-blue-500'
                        onClick={() =>
                            handleLinkClick('/DashboardCliente/Agenda')
                        }
                    >
                        Ordenes Pendientes
                    </div>
                </Link>
                <Link to='/DashboardCliente/Agenda'>
                    <div
                        className='flex h-40 w-60 items-center justify-center rounded-md bg-royal-blue-700 text-white shadow-md hover:bg-royal-blue-500'
                        onClick={() =>
                            handleLinkClick('/DashboardCliente/Agenda')
                        }
                    >
                        Ordenes Completadas
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default InitialWindowProf;