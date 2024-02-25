import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../components/CustomLink';
import { RiMenuLine } from 'react-icons/ri';

const Header: React.FC = () => {
    return (
        <header className='bg-transparent p-4 '>
            <nav className='grid grid-cols-3 items-center justify-between text-white md:grid md:grid-cols-2 md:content-center md:items-center md:justify-items-end md:space-x-8 md:gap-4 md:p-4 lg:grid lg:grid-cols-3'>

                <div className='col-span-2 h-auto w-60 md:col-span-1 md:grid md:justify-self-start'>
                    <Link to='/'>
                        <img src='/Logo2.png' alt='Logo' className='' />
                    </Link>
                </div>

                <div className='hidden lg:col-span-1 lg:grid lg:justify-self-center  '>
                    <RiMenuLine className='hidden' />
                    <div className='hidden lg:grid lg:grid-cols-2 lg:justify-items-center'>
                        <CustomLink to='' content='Cliente' />
                        <CustomLink to='' content='Profesional' />
                    </div>
                </div>

                <div className='col-span-1 grid justify-self-end md:col-span-1 md:gap-4 lg:col-span-1 lg:grid '>
                    <RiMenuLine className='w-12 h-auto m-2 p-2 md:hidden ' />
                    <div className='hidden md:grid md:col-span-1 md:grid-cols-2 md:justify-items-center md:gap-4 lg:grid-cols-2 lg:justify-items-center '>
                        <CustomLink to='/Login' content='Ingresar' />
                        <CustomLink to='/Register' content='Registrate' />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
