import React from 'react';
import {
    UserTypeSelectorProps,
    UserType,
} from '../interfaces/RegistrationFormTypes';

const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({
    onSelectedUserType,
}) => {
    return (
        <div className='flex items-center justify-center'>
            <div className='flex flex-row items-center gap-8'>
                <div
                    className='cursor-pointer rounded-lg bg-white/45 p-4 shadow-md hover:bg-white/80'
                    onClick={() => onSelectedUserType(UserType.Client)}
                >
                    <h3 className='text-lg font-bold'>Cliente</h3>
                    <p>Registrarse como cliente</p>
                </div>
                <div
                    className='cursor-pointer rounded-lg bg-white/45 p-4 shadow-md hover:bg-white/80'
                    onClick={() => onSelectedUserType(UserType.Professional)}
                >
                    <h3 className='text-lg font-bold'>Profesional</h3>
                    <p>Registrarse como profesional</p>
                </div>
            </div>
        </div>
    );
};

export default UserTypeSelector;
