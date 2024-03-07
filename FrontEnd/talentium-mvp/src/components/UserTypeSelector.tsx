import React from 'react';
import {
    UserTypeSelectorProps,
    UserType,
} from '../interfaces/RegistrationFormTypes';
import CustomButton from './CustomButton';
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({
    onSelectedUserType,
}) => {

  const navigate = useNavigate();
   const handleback = () => {
       navigate('/');
   };
    return (
        <div className='flex items-center justify-center'>
            <div className='flex'>
                <CustomButton
                    onClick={handleback}
                    customClass={
                        'z-50 absolute top-20 left-96 md:left-64 xl:left-72 w-24 text-white text-md md:text-xl font-bold cursor-pointer '
                    }
                >
                    <FaArrowLeft className='h-10 w-10 p-2' />
                    atrás
                </CustomButton>
            </div>
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
