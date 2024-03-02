import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardCliente from '../screens/DashboardCliente';
import SidebarDashboard from '../components/SidebarDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import RegistrationForm from '../components/RegistrationForm';
import { UserType } from '../interfaces/RegistrationFormTypes';
import InicioDashboard from '../components/InicioDashboard'

const DashboardRouter: React.FC = () => {
    return (
        <>
            <div className='overflow:hidden grid h-screen grid-cols-6'>
                <SidebarDashboard />
                <div className='relative col-span-6 bg-royal-blue-400 text-center lg:col-span-5 '>
                    <HeaderDashboard />
                    <div className='absolute left-0 top-0 h-full w-full overflow-auto'>
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
                                path='/Ordenes'
                                element={
                                    <h1 className='text-black'>
                                        aca quiero mostrar las ordenes
                                    </h1>
                                }
                            />
                            <Route
                                path='/Datos'
                                element={
                                    <RegistrationForm
                                        user={{}}
                                        userType={UserType.Professional}
                                    />
                                }
                            />
                            <Route
                                path='/Agenda'
                                element={<h1>Próximamente Agenda...</h1>}
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
        </>
    );
};

export default DashboardRouter;
//
