import UserTypeSelector from './UserTypeSelector';
import { UserType } from '../interfaces/RegistrationFormTypes';
import { useUserType } from '../context/UserTypeContext';
import { useNavigate } from 'react-router-dom';
import InitialWindowClient from './InitialWindowClient'
import InitialWindowProf from './InitialWindowProf'
//import { useState } from 'react';

const InicioDashboard: React.FC = () => {
    const { updateUserType } = useUserType();
    const navigate = useNavigate();
    const userTypeFromLocalStorage = localStorage.getItem('userType');

    const onSelectedUserType = (selectedUserType: UserType) => {
        localStorage.setItem('userType', JSON.stringify(selectedUserType));
        updateUserType(selectedUserType);
        navigate('/dashboardcliente/datos');
    };

    return (
        <>
            {(userTypeFromLocalStorage &&
                JSON.parse(userTypeFromLocalStorage) === UserType.Client) ||
            (userTypeFromLocalStorage &&
                JSON.parse(userTypeFromLocalStorage) ===
                    UserType.Professional) ? (
                userTypeFromLocalStorage &&
                JSON.parse(userTypeFromLocalStorage) === UserType.Client ? (
                    <InitialWindowClient />
                ) : (
                    <InitialWindowProf />
                )
            ) : (
                <UserTypeSelector onSelectedUserType={onSelectedUserType} />
            )}
        </>
    );
};


export default InicioDashboard;

//
