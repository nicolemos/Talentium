import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import { FaArrowLeft } from 'react-icons/fa';
import Perfil from './UpdateProfile';
import useCreateUser from '../hooks/useUserServices';
import { useUserType } from '../context/UserTypeContext';
import { useUserData } from '../context/UserDataContext';

const Specialities = [
    'Plomero',
    'Electricista',
    'Albañil',
    'Pintor',
    'Jardinero',
    'Gasista',
    'Profesor',
    'Programador',
    'Diseñador',
    'Cuidador/a',
];

const RegistrationForm = ({ user }) => {
    const navigate = useNavigate();
    const { updateUser } = useCreateUser();
    const { userType, updateUserType } = useUserType();
    const { userData, updateUserData } = useUserData();
    const [formState, setFormState] = useState({
        name: '',
        lastname: '',
        dni: '',
        cuit: '',
        direction: {
            street: '',
            number: '',
            location: '',
            province: '',
        },
        cbu: '',
        speciality: '',
    });

    useEffect(() => {
        const storedUserType = localStorage.getItem('userType');
        const storedUserData = localStorage.getItem('userData');
        if (storedUserType) updateUserType(JSON.parse(storedUserType));
        if (storedUserData) updateUserData(JSON.parse(storedUserData));
    }, [updateUserType, updateUserData]);

    const handleInputChange = (field: string, value: any) => {
        setFormState((prevState: any) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleDirectionChange = (field: string, value: any) => {
        setFormState((prevState: { direction: any }) => ({
            ...prevState,
            direction: {
                ...prevState.direction,
                [field]: value,
            },
        }));
    };

    const onSubmit = async () => {
        try {
            localStorage.setItem('userData', JSON.stringify(formState));
            const storedUserType = localStorage.getItem('userType') || null;
            const storedUserData = localStorage.getItem('userData') || null;
            if (storedUserType) updateUserType(JSON.parse(storedUserType));
            if (storedUserData) updateUserData(JSON.parse(storedUserData));

            if (user.id && userType) {
          /*      const userUpdated = await updateUser(userType, formState);

                if (userUpdated) {
                    console.log(userUpdated);
                    toast.success('Perfil actualizado exitosamente');
                } else {
                    toast.error(
                        'Hubo un error al actualizar el perfil. Vuelve a intentarlo.',
                    );
                }
            } else {
                toast.error(
                    'Hubo un error al actualizar el perfil. Vuelve a intentarlo.',
                );
            }
        } catch (error) {
            console.error('Error during profile update:', error);
            toast.error(
                'Ha ocurrido un error inesperado al actualizar el perfil',
            );
        }
    };

    const handleBack = () => {
        navigate('/DashboardCliente/inicio');
    };

    return (
        <div>
            <div>
                <CustomButton
                    onClick={handleBack}
                    customClass={
                        'z-50 absolute top-20 left-96 md:left-64 xl:left-72 w-24 text-white text-md md:text-xl font-bold cursor-pointer '
                    }
                >
                    <FaArrowLeft className='h-10 w-10 p-2' />
                    atrás
                </CustomButton>
            </div>
            {userType && userData === null && (
                <>
                    <form
                        onSubmit={(e: { preventDefault: () => void }) => {
                            e.preventDefault();
                            onSubmit();
                        }}
                        className={`ml-2 grid h-[60%] w-full grid-cols-3 p-8 md:ml-4 lg:ml-36 xl:w-3/4 2xl:w-3/5`}
                    >
                        <h2 className='col-span-3 w-full text-center text-2xl font-bold'>
                            Completa tu Perfil
                        </h2>

                        <div className='col-span-1 flex flex-col gap-4 p-4'>
                            <label className='text-xs font-bold'>
                                Nombre
                                <input
                                    value={formState.name}
                                    onChange={(e: {
                                        target: { value: string };
                                    }) =>
                                        handleInputChange(
                                            'name',
                                            e.target.value,
                                        )
                                    }
                                    placeholder='Ingrese su nombre'
                                    className='mt-1 w-full rounded-md bg-white/80 px-2 py-1 text-base font-normal outline-none'
                                />
                            </label>
                            {/* ... (similar structure for other fields) ... */}
                        </div>

                        <div className='col-span-1 flex flex-col gap-4 p-4'>
                            <label className='w-full text-xs font-bold'>
                                Calle
                                <input
                                    value={formState.direction.street}
                                    onChange={(e: {
                                        target: { value: string };
                                    }) =>
                                        handleDirectionChange(
                                            'street',
                                            e.target.value,
                                        )
                                    }
                                    placeholder='Ingrese la calle'
                                    className='mt-1 w-full rounded-md bg-white/80 px-2 py-1 text-base font-normal outline-none'
                                />
                            </label>
                            {/* ... (similar structure for other fields) ... */}
                        </div>

                        <div className='col-span-1 flex flex-col gap-4 p-4'>
                            {userType === 'professional' && (
                                <>
                                    <label className='w-full text-xs font-bold'>
                                        CBU
                                        <input
                                            value={formState.cbu}
                                            onChange={(e: {
                                                target: { value: string };
                                            }) =>
                                                handleInputChange(
                                                    'cbu',
                                                    e.target.value,
                                                )
                                            }
                                            aria-invalid={
                                                formState.cbu ? 'true' : 'false'
                                            }
                                            maxLength={22}
                                            placeholder='Ingrese su CBU'
                                            className='mt-1 w-full rounded-md bg-white/80 px-2 py-1 text-base font-normal outline-none'
                                        />
                                    </label>

                                    <label className='w-full text-xs font-bold'>
                                        Especialidad
                                        <select
                                            value={formState.speciality}
                                            onChange={(e: {
                                                target: { value: string };
                                            }) =>
                                                handleInputChange(
                                                    'speciality',
                                                    e.target.value,
                                                )
                                            }
                                            className='mt-1 w-full rounded-md bg-white/70 px-2 py-1 text-base font-normal outline-none'
                                        >
                                            <option value=''>
                                                Selecciona una especialidad
                                            </option>
                                            {Specialities.map((option) => (
                                                <option
                                                    key={option}
                                                    value={option}
                                                >
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                </>
                            )}
                        </div>
                    </form>
                    <div className='flex justify-center'>
                        <CustomButton
                            onClick={onSubmit}
                            customClass={`bg-royal-blue-400 p-2 `}
                        >
                            {'Crear perfil'}
                        </CustomButton>
                    </div>
                </>
            )}
            {userType && userData && (
                <Perfil
                    name={userData?.name || ''}
                    lastname={userData?.lastname || ''}
                    dni={userData?.dni || ''}
                    email={userData?.email || ''}
                    direction={
                        userData?.direction || {
                            street: '',
                            number: '',
                            location: '',
                            province: '',
                        }
                    }
                />
            )}

            {!userType && !userData && (
                <h1>
                    Ups! Debes seleccionar primero tu Perfil desde la pestaña
                    Inicio.
                </h1>
            )}
        </div>
    );
};

export default RegistrationForm;
