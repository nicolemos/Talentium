// Perfil.tsx

import React, { useState } from 'react';
import { UserData } from '../interfaces/UserProps';
import CustomButton from './CustomButton';
import { useUserType } from '../context/UserTypeContext';
import { useAuth } from '../context/AuthContext';
import useCreateUser from '../hooks/useUserServices';
import { toast } from 'react-toastify';
//import { FaArrowLeft } from 'react-icons/fa';
//  import { useNavigate } from 'react-router-dom';

const Perfil: React.FC<UserData> = ({ name, lastname, dni, email, direction }) => {
    const [userData, setUserData] = useState<UserData>({
        name: name,
        lastname: lastname,
        dni: dni,
        email: email,
        direction: direction
    });

    const { userType } = useUserType();
    const type = JSON.stringify(userType);

    const { getUserFromLocalStorage } = useAuth();
    const userId = Number(getUserFromLocalStorage()?.id);

    const { updateUser } = useCreateUser();

    const handleUpdateProfile = async () => {
        const updatedUser = await updateUser(userId, type, userData);
        if (updatedUser) {
            setUserData((prevData) => ({
                ...prevData,
                email: userData.email,
                direccion: userData.direction,
            }));
            toast.success('Perfil actualizado exitosamente');
        } else {
            console.log('Error al actualizar el perfil.');
            toast.error(
                'Hubo un error al actualizar el perfil. Vuelve a intentarlo.',
            );
        }
    };

    return (
        <div className='mx-auto mt-10 flex max-w-md flex-col overflow-auto rounded-md p-6 shadow-md'>
            <div className='flex'></div>
            <h2 className='mb-4 flex items-center justify-center text-2xl font-semibold'>
                Actualiza tu Perfil
            </h2>
            <div className='mb-4 flex'>
                <label className='mb-2 block text-sm font-bold text-gray-700'>
                    Nombre:
                </label>
                <p className='ml-2'>{userData.name}</p>
            </div>
            <div className='mb-4 flex'>
                <label className='mb-2 block text-sm font-bold text-gray-700'>
                    Apellido:
                </label>
                <p className='ml-2'>{userData.lastname}</p>
            </div>
            <div className='mb-4 flex'>
                <label className='mb-2 block text-sm font-bold text-gray-700'>
                    Teléfono:
                </label>
                <p className='ml-2'>{userData.dni}</p>
            </div>
            <div className='mb-4'>
                <label className='mb-2 block text-sm font-bold text-gray-700'>
                    Email:
                </label>
                <input
                    type='text'
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        email: e.target.value
                      })
                    }
                    placeholder='Email'
                    className='w-full rounded-md border border-gray-300 p-2 py-0.5'
                />
            </div>
            <div className='mb-4'>
                <label className='mb-2 block text-sm font-bold text-gray-700'>
                    Dirección:
                </label>
                <input
                    type='text'
                    value={userData.direction.street}
                    onChange={(e) =>
                        setUserData({
                            ...userData,
                            direction: {
                                ...userData.direction,
                                street: e.target.value,
                            },
                        })
                    }
                    placeholder='Calle'
                    className='w-full rounded-md border border-gray-300 p-2 py-0.5'
                />
                <input
                    type='text'
                    value={userData.direction.number}
                    onChange={(e) =>
                        setUserData({
                            ...userData,
                            direction: {
                                ...userData.direction,
                                number: e.target.value,
                            },
                        })
                    }
                    placeholder='Número'
                    className='w-full rounded-md border border-gray-300 p-2 py-0.5'
                />
                <input
                    type='text'
                    value={userData.direction.location}
                    onChange={(e) =>
                        setUserData({
                            ...userData,
                            direction: {
                                ...userData.direction,
                                location: e.target.value,
                            },
                        })
                    }
                    placeholder='Localidad'
                    className='w-full rounded-md border border-gray-300 p-2 py-0.5'
                />
                <input
                    type='text'
                    value={userData.direction.province}
                    onChange={(e) =>
                        setUserData({
                            ...userData,
                            direction: {
                                ...userData.direction,
                                province: e.target.value,
                            },
                        })
                    }
                    placeholder='Provincia'
                    className='w-full rounded-md border border-gray-300 p-2 py-0.5'
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
