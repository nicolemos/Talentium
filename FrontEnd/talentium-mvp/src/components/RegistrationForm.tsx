import { useForm, SubmitHandler } from 'react-hook-form';
import { RegistrationFormProps } from '../interfaces/RegistrationFormTypes';
import { toast } from 'react-toastify';
import { useUserType } from '../context/UserTypeContext';
import { useUserData } from '../context/UserDataContext';
import useUserServices from '../hooks/useUserServices';
import CustomButton from './CustomButton';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Perfil from './UpdateProfile';

const Specialities = [
    'Plumber',
    'Electrician',
    'Construction_Worker',
    'Painter',
    'Gardener',
    'Gasman',
    'Teacher',
    'Programmer',
    'Designer',
    'Nanny',
];

const RegistrationForm: React.FC<RegistrationFormProps> = ({user}) => {
    const navigate = useNavigate();
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
    } = useForm<RegistrationFormProps>();

    const { updateUser } = useUserServices();
    const { userType, updateUserType } = useUserType();
    const { userData, updateUserData } = useUserData();
    console.log(user)
  
    useEffect(() => {
        const userType = localStorage.getItem('userType') || null || undefined;
        userType && updateUserType(JSON.parse(userType));
        const userData = localStorage.getItem('userData') || null || undefined;
      userData && updateUserData(JSON.parse(userData));
              // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    {
        /* const filterEmptyFields = (data: RegistrationFormProps) => {
        const filteredData = {};

        // Iterate through the fields in the data
        for (const key in data) {
            // Check if the field is not empty
            if (data[key] !== '') {
                // Add the non-empty field to the filteredData object
                filteredData[key] = data[key];
            }
        }

        return filteredData;
      */
    }

    const onSubmit: SubmitHandler<RegistrationFormProps> = async (
        updatedUserData,
    ) => {
        try {

            localStorage.setItem('userData', JSON.stringify(updatedUserData));
            const userType = localStorage.getItem('userType') || null;
            const userData = localStorage.getItem('userData') || null;
            userType && updateUserType(JSON.parse(userType));
            userData && updateUserData(JSON.parse(userData));
            navigate("/DashboardCliente/Inicio")
            console.log((user))
            if (user.id && userType) {
                const userUpdated = await updateUser(
                    user.id,
                    userType,
                    updatedUserData,
                );

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

    const handleback = () => {
        navigate('/DashboardCliente/inicio');
    };

    return (
        <div>
            <div>
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
            {userType && userData === null && (
                <>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={`ml-2 grid h-[60%] w-full grid-cols-3 p-8 md:ml-4 lg:ml-36 xl:w-3/4 2xl:w-3/5`}
                    >
                        <h2 className='col-span-3 w-full text-center text-2xl font-bold'>
                            Completa tu Perfil
                        </h2>

                        <div className='col-span-1 flex flex-col gap-4 p-4'>
                            <label className='text-xs font-bold'>
                                Nombre
                                <input
                                    {...register('name', {
                                        minLength: {
                                            value: 3,
                                            message:
                                                'Debes ingresar mínimo 3 letras',
                                        },
                                        pattern: {
                                            value: /^[A-Za-z]+$/i,
                                            message:
                                                'Solo puedes ingresar letras',
                                        },
                                    })}
                                    placeholder='Ingrese su nombre'
                                    className='mt-1 w-full rounded-md bg-white/80 px-2 py-1 text-base font-normal outline-none'
                                />
                                {errors.name?.message && (
                                    <p
                                        role='alert'
                                        className='col-2 mb-1 text-center text-red-500'
                                    >
                                        {errors.name.message}
                                    </p>
                                )}
                            </label>

                            <label className='w-full text-xs font-bold'>
                                Apellido
                                <input
                                    {...register('lastname', {
                                        minLength: {
                                            value: 3,
                                            message:
                                                'Debes ingresar mínimo 3 letras',
                                        },
                                        pattern: {
                                            value: /^[A-Za-z]+$/i,
                                            message:
                                                'Solo puedes ingresar letras',
                                        },
                                    })}
                                    placeholder='Ingrese su apellido'
                                    className='mt-1 w-full rounded-md bg-white/80 px-2 py-1 text-base font-normal outline-none'
                                />
                                {errors.lastname?.message && (
                                    <p
                                        role='alert'
                                        className='mb-1 text-center text-red-500'
                                    >
                                        {errors.lastname.message}
                                    </p>
                                )}
                            </label>

                            {userType === 'Cliente' && (
                                <>
                                    <label className='w-full text-xs font-bold'>
                                        DNI
                                        <input
                                            {...register('dni', {
                                                required:
                                                    'Debe ingresar su número de DNI',
                                                minLength: {
                                                    value: 8,
                                                    message:
                                                        'Debes ingresar mínimo 8 caracteres',
                                                },
                                            })}
                                            maxLength={9}
                                            placeholder='Ingrese su DNI'
                                            className='mt-1 w-full rounded-md bg-white/80 px-2 py-1 text-base font-normal outline-none'
                                        />
                                        {errors.dni?.type === 'required' && (
                                            <p
                                                role='alert'
                                                className='mb-1 w-full text-center text-red-500'
                                            >
                                                {errors.dni?.message}
                                            </p>
                                        )}
                                    </label>
                                </>
                            )}

                            {userType === 'Profesional' && (
                                <>
                                    <label className='w-full text-xs font-bold'>
                                        CUIT
                                        <input
                                            {...register('cuit', {
                                                required:
                                                    'Debes ingresar tu CUIT',
                                                minLength: {
                                                    value: 12,
                                                    message:
                                                        'Debes ingresar mínimo 12 caracteres',
                                                },
                                            })}
                                            maxLength={13}
                                            placeholder='Ingrese su CUIT'
                                            className='mt-1 w-full rounded-md bg-white/80 px-2 py-1 text-base font-normal outline-none'
                                        />
                                        {errors.cuit?.type === 'required' && (
                                            <p
                                                role='alert'
                                                className='mb-1 w-full text-center text-red-500'
                                            >
                                                {errors.cuit?.message}
                                            </p>
                                        )}
                                    </label>
                                </>
                            )}
                        </div>

                        <div className='col-span-1 flex flex-col gap-4 p-4'>
                            <label className='w-full text-xs font-bold'>
                                Calle
                                <input
                                    {...register('direction.street', {
                                        minLength: {
                                            value: 3,
                                            message:
                                                'Debes ingresar mínimo 3 letras',
                                        },
                                    })}
                                    placeholder='Ingrese la calle'
                                    className='mt-1 w-full rounded-md bg-white/80 px-2 py-1 text-base font-normal outline-none'
                                />
                                {errors.direction?.street?.message && (
                                    <p
                                        role='alert'
                                        className='col-2 mb-1 text-center text-red-500'
                                    >
                                        {errors.direction.street.message}
                                    </p>
                                )}
                            </label>

                            <label className='w-full text-xs font-bold'>
                                Número
                                <input
                                    {...register('direction.number', {
                                        minLength: {
                                            value: 3,
                                            message:
                                                'Debes ingresar mínimo 3 caracteres',
                                        },
                                    })}
                                    placeholder='Ingrese el número'
                                    className='mt-1 w-full rounded-md bg-white/80 px-2 py-1 text-base font-normal outline-none'
                                />
                                {errors.direction?.number?.message && (
                                    <p
                                        role='alert'
                                        className='col-2 mb-1 text-center text-red-500'
                                    >
                                        {errors.direction.number.message}
                                    </p>
                                )}
                            </label>

                            <label className='w-full text-xs font-bold'>
                                Provincia
                                <input
                                    {...register('direction.province', {
                                        minLength: {
                                            value: 3,
                                            message:
                                                'Debes ingresar mínimo 3 letras',
                                        },
                                    })}
                                    placeholder='Ingrese la provincia'
                                    className='mt-1 w-full rounded-md bg-white/80 px-2 py-1 text-base font-normal outline-none'
                                />
                                {errors.direction?.province?.message && (
                                    <p
                                        role='alert'
                                        className='col-2 mb-1 text-center text-red-500'
                                    >
                                        {errors.direction.province.message}
                                    </p>
                                )}
                            </label>

                            <label className='w-full text-xs font-bold'>
                                Localidad
                                <input
                                    {...register('direction.location', {
                                        minLength: {
                                            value: 3,
                                            message:
                                                'Debes ingresar mínimo 3 letras',
                                        },
                                    })}
                                    placeholder='Ingrese la localidad'
                                    className='mt-1 w-full rounded-md bg-white/80 px-2 py-1 text-base font-normal outline-none'
                                />
                                {errors.direction?.location?.message && (
                                    <p
                                        role='alert'
                                        className='col-2 mb-1 text-center text-red-500'
                                    >
                                        {errors.direction.location.message}
                                    </p>
                                )}
                            </label>
                        </div>

                        <div className='col-span-1 flex flex-col gap-4 p-4'>
                            {userType === 'Profesional' && (
                                <>
                                    <label className='w-full text-xs font-bold'>
                                        CBU
                                        <input
                                            {...register('cbu', {
                                                required:
                                                    'Debes ingresar tu CBU',
                                                minLength: {
                                                    value: 22,
                                                    message:
                                                        'Debes ingresar 22 dígitos',
                                                },
                                            })}
                                            aria-invalid={
                                                errors.cbu ? 'true' : 'false'
                                            }
                                            minLength={22}
                                            maxLength={22}
                                            placeholder='Ingrese su CBU'
                                            className='mt-1 w-full rounded-md bg-white/80 px-2 py-1 text-base font-normal outline-none'
                                        />
                                        {errors.cbu?.type === 'required' && (
                                            <p
                                                role='alert'
                                                className='mb-1 w-full text-center text-red-500'
                                            >
                                                {errors.cbu?.message}
                                            </p>
                                        )}
                                    </label>

                                    <label className='w-full text-xs font-bold'>
                                        Especialidad
                                        <select
                                            {...register('speciality', {
                                                required:
                                                    'Debes elegir una especialidad',
                                            })}
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
                                        {errors.speciality?.type ===
                                            'required' && (
                                            <p
                                                role='alert'
                                                className='mb-1 w-full text-center text-red-500'
                                            >
                                                {errors.speciality?.message}
                                            </p>
                                        )}
                                    </label>
                                </>
                            )}
                        </div>
                    </form>
                    <div className='flex justify-center'>
                        <CustomButton
                            onClick={handleSubmit(onSubmit)}
                            disabled={isSubmitting}
                            customClass={`bg-royal-blue-400 p-2 `}
                        >
                            {isSubmitting ? 'Creando...' : 'Crear perfil'}
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
