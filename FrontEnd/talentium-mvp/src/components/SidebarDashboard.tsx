import {
    RiListUnordered,
    RiMessage3Line,
    RiProfileLine,
    RiHome2Line,
    RiCloseLine,
    RiMenuLine,
} from 'react-icons/ri';
import { AiOutlineSchedule } from 'react-icons/ai';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import NoAvatar from '/NoAvatar.png?url';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import CustomLink from './CustomLink';
import { useState } from 'react';
import CustomButton from './CustomButton';

const SidebarDashboard: React.FC = () => {
    const auth = useAuth();
    const navigate = useNavigate();

  const handleLogout = () => {
       localStorage.removeItem('user');
      auth.logout();
        navigate('/');
    };
    const [showMenu, setShowMenu] = useState(false);

    return (
        <aside
            className={`fixed z-50 grid w-[80%] transition-all duration-300 md:w-[30%] lg:static lg:w-full ${showMenu ? 'left-0' : '-left-full'}`}
        >
            <div className='flex h-full flex-col items-center justify-center gap-2 bg-royal-blue-500'>
                <div className='flex h-[40vh] flex-col items-center gap-2 p-2'>
                    <img
                        src='/Logo1.png'
                        alt='Talentium'
                        className='h-auto w-48'
                    />
                    <img
                        src={NoAvatar}
                        alt='Talentium'
                        className='ocject-cover h-20 w-20 rounded-full ring-2 ring-royal-blue-200 '
                    />
                    <h2 className='rounded-full bg-royal-blue-700 p-1 text-sm font-bold text-white'>
                        Cliente
                    </h2>
                </div>

                <div className='flex h-[60vh] w-full flex-col justify-between gap-2 rounded-tr-[70px] bg-royal-blue-800 p-6'>
                    <nav className='flex flex-col gap-4 text-white'>
                        <CustomLink
                            to='/DashboardCliente/Inicio'
                            content='Inicio'
                            children={<RiHome2Line />}
                        />
                        <CustomLink
                            to='/DashboardCliente/Datos'
                            content='Datos'
                            children={<RiProfileLine />}
                        />
                        <CustomLink
                            to='/DashboardCliente/Ordenes'
                            content='Ordenes'
                            children={<RiListUnordered />}
                        />
                        <CustomLink
                            to='/DashboardCliente/Agenda'
                            content='Agenda'
                            children={<AiOutlineSchedule />}
                        />
                        <CustomLink
                            to='/DashboardCliente/Soporte'
                            content='Soporte'
                            children={<RiMessage3Line />}
                        />
                    </nav>
                    <div className='-p-4 flex items-center justify-center '>
                        <CustomLink
                            to='/'
                            onClick={handleLogout}
                            customClass='text-white bg-royal-blue-900 rounded-md'
                        >
                            <FaArrowRightFromBracket />
                            Cerrar sesión
                        </CustomLink>
                    </div>
                </div>
                <div className='fixed bottom-5 right-5 lg:hidden '>
                    <CustomButton
                        onClick={() => setShowMenu(!showMenu)}
                        customClass={''}
                    >
                        {showMenu ? (
                            <RiCloseLine className='h-auto w-12 rounded-md bg-gray-300/50 text-royal-blue-500' />
                        ) : (
                            <RiMenuLine className='h-auto w-12 rounded-md bg-gray-300/50 text-royal-blue-500' />
                        )}
                    </CustomButton>
                </div>
            </div>
        </aside>
    );
};

export default SidebarDashboard;
