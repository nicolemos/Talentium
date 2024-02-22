import React from 'react';
import {
    UserTypeSelectorProps,
    UserType,
} from '../interfaces/RegisterFormTypes';

const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({
    onSelectedUserType,
}) => {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-row items-center gap-8'>
                <div
                    className='cursor-pointer bg-white/45 p-4 rounded-lg shadow-md hover:bg-white/80'
                    onClick={() => onSelectedUserType(UserType.Customer)}
                >
                    <h3 className='text-lg font-bold'>Cliente</h3>
                    <p>Registrarse como cliente</p>
                </div>
                <div
                    className='cursor-pointer bg-white/45 p-4 rounded-lg shadow-md hover:bg-white/80'
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
