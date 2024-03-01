import React from 'react';
import { IoSearch } from 'react-icons/io5';

const HeaderDashboard: React.FC = () => {
    return (
        <header className='flex w-full h-full flex-col gap-4 bg-royal-blue-400 p-3'>
            <div className='flex w-full items-center justify-between'>
                <h1 className='px-6 text-xl font-bold text-white'>
                    Hola, <span className='text-royal-blue-100'>Usuario</span>
                </h1>
                <div className='relative'>
                    <IoSearch className='absolute left-2 top-1/2 -translate-y-1/2' />
                    <input
                        type='search'
                        className='rounded-md bg-royal-blue-200 pl-8 pr-4 outline-none shadow-md'
                    />
                </div>
            </div>
            {/*Pantalla de presentación de Cards*/}
            <div className='flex items-center justify-center w-full h-[90vh] border bg-royal-blue-100/50 rounded-md shadow-md '>
                
            </div>
        </header>
    );
};

export default HeaderDashboard;
