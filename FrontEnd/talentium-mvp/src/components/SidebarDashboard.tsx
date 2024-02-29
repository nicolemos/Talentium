import {
    RiListUnordered,
    RiMessage3Line,
    RiProfileLine,
    RiWalletLine,
    RiHome2Line,
} from 'react-icons/ri';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import NoAvatar from '/NoAvatar.png?url';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import CustomLink from './CustomLink';

const SidebarDashboard: React.FC = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/');
    };

    return (
        <aside className='h-full overflow-hidden'>
            <div className='grid-col-span-1 flex h-full flex-col items-center justify-center bg-royal-blue-500'>
                <div className='flex flex-col items-center gap-2 p-2'>
                    <img
                        src='/Logo1.png'
                        alt='Talentium'
                        className='h-auto w-48'
                    />
                    <img src={NoAvatar} alt='Talentium' className='h-20 w-20' />
                    <h2 className='rounded-full bg-royal-blue-700 p-1 text-sm font-bold text-white'>
                        Cliente
                    </h2>
                </div>

                <div className='col-span-1 flex h-[70vh] w-full flex-col justify-between rounded-tr-[100px] bg-royal-blue-800'>
                    <NavLink to='' className='p-8 text-white'>
                        <CustomLink
                            to='/'
                            content='Inicio'
                            children={<RiHome2Line />}
                        />
                        <CustomLink
                            to='/Datos'
                            content='Datos'
                            children={<RiProfileLine />}
                        />
                        <CustomLink
                            to='/Ordenes'
                            content='Ordenes'
                            children={<RiListUnordered />}
                        />
                        <CustomLink
                            to='/Billetera'
                            content='Billetera'
                            children={<RiWalletLine />}
                        />
                        <CustomLink
                            to='/Soporte'
                            content='Soporte'
                            children={<RiMessage3Line />}
                        />
                    </NavLink>
                    <div className='m-2 mb-4 flex h-10 w-52 items-center rounded-xl bg-royal-blue-950/50'>
                        <Link
                            to='/'
                            onClick={handleLogout}
                            className='flex items-center gap-2 p-10 text-white'
                        >
                            <FaArrowRightFromBracket />
                            Cerrar sesión
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SidebarDashboard;
