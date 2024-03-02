import UserTypeSelector from './UserTypeSelector';
import { UserType } from '../interfaces/RegistrationFormTypes';
import { useUserType } from '../context/UserTypeContext';
import { useNavigate } from 'react-router-dom';
//import { useState } from 'react';

const InicioDashboard: React.FC = () => {
    const { updateUserType } = useUserType();
    const navigate = useNavigate();


    const onSelectedUserType = (selectedUserType: UserType) => {
        localStorage.setItem('userType', JSON.stringify(selectedUserType));
        updateUserType(selectedUserType);
        navigate('/dashboardcliente/datos');
    };

    return (
        <>
            <UserTypeSelector onSelectedUserType={onSelectedUserType} />
        </>
    );
};

export default InicioDashboard;

//
