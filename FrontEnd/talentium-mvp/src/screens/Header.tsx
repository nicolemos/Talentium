import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../components/CustomLink';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='bg-transparent p-4 '>
            <nav className='grid grid-cols-3 items-center justify-between text-white md:grid md:grid-cols-2 md:content-center md:items-center md:justify-items-end md:space-x-8 md:gap-4 md:p-4 lg:grid lg:grid-cols-3'>
                <div className='col-span-2 h-auto w-60 md:w-44 md:col-span-1 md:grid md:justify-self-start'>
                    <Link to='/'>
                        <img src='/Logo2.png' alt='Logo' className='' />
                    </Link>
                </div>

                <div
                    className='col-span-1 justify-self-end lg:hidden'
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <RiCloseLine className='w-12 h-auto m-2 p-2' />
                    ) : (
                        <RiMenuLine className='w-12 h-auto m-2 p-2' />
                    )}
                </div>

                <div className='hidden md:hidden lg:grid lg:grid-cols-2 lg:justify-items-center lg:justify-self-center '>
                    <CustomLink to='' content='Cliente' />
                    <CustomLink to='' content='Profesional' />
                </div>

                <div
                    className={`${isMenuOpen ? 'grid' : 'hidden'} grid-cols-2 col-span-3 justify-items-center lg:grid lg:col-span-1 lg:justify-items-center gap-4 p-4`}
                >
                    <div className='grid grid-cols-2 col-span-3 content-center justify-items-center '>
                        <CustomLink to='/Login' content='Ingresar' />
                        <CustomLink to='/Register' content='Registrate' />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
