import {    RiListUnordered,
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
            <div className='h-full grid-col-span-1 bg-royal-blue-500 flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center p-2 gap-2'>
                    <img
                        src='/Logo1.png'
                        alt='Talentium'
                        className='w-48 h-auto'
                    />
                    <img src={NoAvatar} alt='Talentium' className='w-20 h-20' />
                    <h2 className='text-white text-sm font-bold p-1 bg-royal-blue-700 rounded-full'>
                        Cliente
                    </h2>
                </div>

                <div className='col-span-1 bg-royal-blue-800 flex flex-col justify-between w-full rounded-tr-[100px] h-[70vh]'>
                    <NavLink to='' className='text-white p-8'>
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
                    <div className='bg-royal-blue-950/50 w-52 h-10 m-2 mb-4 flex items-center rounded-xl'>
                        <Link
                            to='/'
                            onClick={handleLogout}
                            className='text-white p-10 flex items-center gap-2'
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
