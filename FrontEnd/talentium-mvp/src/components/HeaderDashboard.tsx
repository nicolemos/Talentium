import React from 'react';
import { IoSearch } from 'react-icons/io5';

const HeaderDashboard: React.FC = () => {
    return (
        <header className='flex items-center justify-between bg-royal-blue-400 p-3'>
            <h1 className='px-4 text-xl font-bold text-white'>
                Hola, <span className='text-royal-blue-100'>Usuario</span>
            </h1>
            <div className='relative'>
                <IoSearch className='absolute left-2 top-1/2 -translate-y-1/2' />
                <input
                    type='search'
                    className='rounded-md bg-royal-blue-200 pl-8 pr-4 outline-none'
                />
            </div>
        </header>
    );
};

export default HeaderDashboard;
