import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardCliente from '../screens/DashboardCliente';
import SidebarDashboard from '../components/SidebarDashboard';
// import RegistrationForm from '../components/RegistrationForm';
// import { UserType } from '../interfaces/RegistrationFormTypes';
import { IoSearch } from 'react-icons/io5';
import InicioDashboard from '../components/InicioDashboard';
import CreateOrdersClient from '../components/CreateOrdersClient';
import { Datos } from '../data/Datos';
import { Orders } from '../data/OrdersData';
import OrdersListProf from '../components/OrdersListProf';
import UpdateProfile from '../components/UpdateProfile';

const DashboardRouter: React.FC = () => {
    //  const userType = localStorage.getItem('userType');
    const clienteDatos = Datos.cliente();

    const ordenesDatos = Orders;

    return (
        <>
            <div className='overflow:hidden grid h-screen grid-cols-6'>
                <SidebarDashboard />

                <div className='col-span-6 flex h-full w-full items-center justify-center rounded-md shadow-md lg:col-span-5 '>
                    <div className='flex h-full w-full flex-col gap-4 bg-royal-blue-400 p-3'>
                        <div className='flex w-full items-center justify-between'>
                            <h1 className='px-6 text-xl font-bold text-white'>
                                Hola,{' '}
                                <span className='text-royal-blue-100'>
                                    Usuario
                                </span>
                            </h1>

                            <div className='relative'>
                                <IoSearch className='absolute left-2 top-1/2 -translate-y-1/2' />
                                <input
                                    type='search'
                                    className='rounded-md bg-royal-blue-200 pl-8 pr-4 shadow-md outline-none'
                                />
                            </div>
                        </div>
                        {/*Pantalla de presentación de Cards*/}
                        <div className='flex h-[90vh] w-full items-center justify-center rounded-md border bg-royal-blue-100/50 shadow-md '>
                            <Routes>
                                <Route
                                    path='/'
                                    element={<DashboardCliente />}
                                />
                                <Route
                                    path='/Inicio'
                                    element={<InicioDashboard />}
                                />
                                <Route
                                    path='/Datos'
                                    element={
                                        <UpdateProfile userId={''} />
                                    }
                                />
                                <Route
                                    path='/Ordenes'
                                    element={
                                        <CreateOrdersClient
                                            cliente={clienteDatos}
                                        />
                                    }
                                />
                                <Route
                                    path='/Agenda'
                                    element={<OrdersListProf orders={ordenesDatos} />}
                                />
                                <Route
                                    path='/Soporte'
                                    element={
                                        <h1 className='text-black'>
                                            Próximamente soporte...
                                        </h1>
                                    }
                                />
                                {/* Add more routes as needed */}
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardRouter;
