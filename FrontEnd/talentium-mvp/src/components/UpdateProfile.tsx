// Perfil.tsx

import React, { useState, useEffect } from 'react';
import { PerfilProps, UserData } from '../interfaces/UserProps';
import CustomButton from './CustomButton';
//import { FaArrowLeft } from 'react-icons/fa';
//import { useNavigate } from 'react-router-dom';

const Perfil: React.FC<PerfilProps> = ({ userId }) => {
    const [userData, setUserData] = useState<UserData>({
        nombre: 'Angel',
        apellido: 'Alvarez',
        dni: '123456789',
        email: 'angel@gmail.com',
        direccion: 'mendoza',
    });

    useEffect(() => {
        // Simula la obtención de datos del almacenamiento local
        const fetchData = () => {
            // Recupera los datos del usuario según el userId
            // Puedes ajustar esta lógica según tu implementación real
            const dataFromStorage = {};
            /* Lógica para recuperar datos de almacenamiento */

            setUserData(dataFromStorage);
        };

        fetchData();
    }, [userId]);

    const handleUpdateProfile = () => {
        // Implementa la lógica para actualizar el perfil (solo email y dirección)
        // Puedes utilizar una función o enviar una solicitud al servidor

        // Ejemplo de cómo podrías actualizar solo email y dirección
        setUserData((prevData) => ({
            ...prevData,
            email: 'nuevoemail@example.com',
            direccion: 'Nueva dirección',
        }));
    };



    return (
        <div className='mx-auto mt-10 flex max-w-md flex-col rounded-md p-6 shadow-md'>
            <div className='flex'>
            </div>
            <h2 className='mb-4 flex items-center justify-center text-2xl font-semibold'>
                Perfil de Usuario
            </h2>
            <div className='mb-4'>
                <label className='mb-2 block text-sm font-bold text-gray-700'>
                    Nombre:
                </label>
                <p>{userData.nombre}</p>
            </div>
            <div className='mb-4'>
                <label className='mb-2 block text-sm font-bold text-gray-700'>
                    Apellido:
                </label>
                <p>{userData.apellido}</p>
            </div>
            <div className='mb-4'>
                <label className='mb-2 block text-sm font-bold text-gray-700'>
                    DNI:
                </label>
                <p>{userData.dni}</p>
            </div>
            <div className='mb-4'>
                <label className='mb-2 block text-sm font-bold text-gray-700'>
                    Email:
                </label>
                <input
                    type='text'
                    value={userData.email}
                    onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                    }
                    className='w-full rounded-md border border-gray-300 p-2'
                />
            </div>
            <div className='mb-4'>
                <label className='mb-2 block text-sm font-bold text-gray-700'>
                    Dirección:
                </label>
                <input
                    type='text'
                    value={userData.direccion}
                    onChange={(e) =>
                        setUserData({ ...userData, direccion: e.target.value })
                    }
                    className='w-full rounded-md border border-gray-300 p-2'
                />
            </div>
            <CustomButton
                onClick={handleUpdateProfile}
                customClass='flex align-center justify-center bg-royal-blue-600 lg:bg-royal-blue-500 rounded-md shadow-md p-2'
            >
                Actualizar Perfil
            </CustomButton>
        </div>
    );
};

export default Perfil;
