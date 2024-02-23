import React from 'react';import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import NoAvatar from '/NoAvatar.png?url';
import CustomLink from '../components/CustomLink';

const Header: React.FC = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/');
    };

    return (
        <header className='text-white body-font flex flex-row items-center justify-between'>
            <div className='pl-5 pt-2'>
                <Link to='/'>
                    <img src='/Logo2.png' alt='' className='w-36 h-auto' />
                </Link>
            </div>

            <div className=''>
                <nav className=''>
                    <CustomLink to='' content='Cliente'/>
                    <CustomLink to='' content='Profesional'/>
                </nav>
            </div>

            <div className='pr-3 flex gap-2'>
                {auth.user ? (
                    <>
                        <span className='py-1 px-3'>{auth.user.name}</span>
                        <img
                            src={
                                auth.user.photoUrl
                                    ? auth.user.photoUrl
                                    : NoAvatar
                            }
                            alt='Perfil'
                            className='w-8 h-8 rounded-full'
                        />
                        <button type='button' onClick={handleLogout}>
                            Cerrar sesion
                        </button>
                    </>
                ) : (
                    <>
                    <CustomLink to='/Login' content='Ingresar'/>
                    <CustomLink to='/Register' content='Registrate'/>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
