import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardCliente from '../screens/DashboardCliente';

const DashboardRouter: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<DashboardCliente />} />
            {/* Add more routes as needed */}
        </Routes>
    );
};

export default DashboardRouter;
