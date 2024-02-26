import React from 'react';
import { IoSearch } from 'react-icons/io5';

const HeaderDashboard: React.FC = () => {
    return (
        <header className="bg-royal-blue-400 flex items-center justify-between p-3">
            <h1 className="text-white text-xl font-bold px-4">
                Hola, <span className="text-royal-blue-100">Usuario</span>
            </h1>
            <div className="relative">
                <IoSearch className="absolute top-1/2 -translate-y-1/2 left-2" />
                <input
                    type="search"
                    className="bg-royal-blue-200 outline-none pl-8 pr-4 rounded-md"
                />
            </div>
        </header>
    );
};

export default HeaderDashboard;
