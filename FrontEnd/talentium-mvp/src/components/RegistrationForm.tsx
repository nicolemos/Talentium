import { useForm, SubmitHandler } from 'react-hook-form';
import { RegistrationFormProps } from '../interfaces/RegistrationFormTypes';
import { toast } from 'react-toastify';

import useUserServices from '../hooks/useUserServices';

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

const RegistrationForm: React.FC<RegistrationFormProps> = ({
    userType,
    user,
}) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<RegistrationFormProps>();

    const { updateUser } = useUserServices();

    const onSubmit: SubmitHandler<RegistrationFormProps> = async (
        updatedUserData
    ) => {
        try {
            console.log(updatedUserData);

            if (user.id && userType) {
                const userUpdated = await updateUser(
                    user.id,
                    userType,
                    updatedUserData
                );

                if (userUpdated) {
                    toast.success('Perfil actualizado exitosamente');
                } else {
                    toast.error(
                        'Hubo un error al actualizar el perfil. Vuelve a intentarlo.'
                    );
                }
            } else {
                toast.error(
                    'Hubo un error al actualizar el perfil. Vuelve a intentarlo.'
                );
            }
        } catch (error) {
            console.error('Error during profile update:', error);
            toast.error(
                'Ha ocurrido un error inesperado al actualizar el perfil'
            );
        }
    };

    return (
        <div className='flex justify-center items-center h-full w-full p-8'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={`bg-white/45 w-full xl:w-3/4 2xl:w-3/5 p-8 rounded-lg shadow-lg grid grid-cols-2 gap-8`}
            >
                <h2 className='text-xl font-bold mb-4 text-center w-full col-span-2'>
                    Perfil &gt; {`${userType}`}
                </h2>

                <div className='col-span-1 p-4 flex flex-col gap-4'>
                    <label className='text-xs font-bold'>
                        {errors.name?.message && (
                            <p
                                role='alert'
                                className='text-red-500 mb-1 col-2 text-center'
                            >
                                {errors.name.message}
                            </p>
                        )}
                        Nombre
                        <input
                            {...register('name', {
                                required: 'Debes ingresar tu nombre',
                                minLength: {
                                    value: 3,
                                    message: 'Debes ingresar mínimo 3 letras',
                                },
                            })}
                            aria-invalid={errors.name ? 'true' : 'false'}
                            placeholder='Ingrese su nombre'
                            className='text-base w-full rounded-sm outline-none px-2 py-1 mt-1 bg-white/80 font-normal'
                        />
                    </label>

                    <label className='text-xs w-full font-bold'>
                        {errors.lastname?.type === 'required' && (
                            <p
                                role='alert'
                                className='text-center text-red-500 mb-1'
                            >
                                {errors.lastname.message}
                            </p>
                        )}
                        Apellido
                        <input
                            {...register('lastname', {
                                required: 'Debes ingresar tu apellido',
                                minLength: {
                                    value: 3,
                                    message: 'Debes ingresar mínimo 3 letras',
                                },
                                pattern: {
                                    value: /^[A-Za-z]+$/i,
                                    message: 'Solo puedes ingresar letras',
                                },
                            })}
                            placeholder='Ingrese su apellido'
                            className='text-base w-full rounded-sm outline-none px-2 py-1 mt-1 bg-white/80 font-normal'
                        />
                    </label>

                    {userType === 'Profesional' && (
                        <>
                            <label className='text-xs w-full font-bold'>
                                {errors.cuit?.type === 'required' && (
                                    <p
                                        role='alert'
                                        className='text-center text-red-500 mb-1 w-full'
                                    >
                                        {errors.cuit?.message}
                                    </p>
                                )}
                                CUIT
                                <input
                                    {...register('cuit', {
                                        required: 'Debes ingresar tu CUIT',
                                        minLength: {
                                            value: 12,
                                            message:
                                                'Debes ingresar mínimo 12 caracteres',
                                        },
                                    })}
                                    maxLength={13}
                                    placeholder='Ingrese su CUIT'
                                    className='text-base w-full rounded-sm outline-none px-2 py-1 mt-1 bg-white/80 font-normal'
                                />
                            </label>

                            <label className='text-xs w-full font-bold'>
                                {errors.speciality?.type === 'required' && (
                                    <p
                                        role='alert'
                                        className='text-center text-red-500 mb-1 w-full'
                                    >
                                        {errors.speciality?.message}
                                    </p>
                                )}
                                CBU
                                <input
                                    {...register('cbu', {
                                        required: 'Debes ingresar tu CBU',
                                        minLength: {
                                            value: 22,
                                            message:
                                                'Debes ingresar mínimo 3 caracteres',
                                        },
                                    })}
                                    aria-invalid={errors.cbu ? 'true' : 'false'}
                                    maxLength={22}
                                    placeholder='Ingrese su CBU'
                                    className='text-base w-full rounded-sm outline-none px-2 py-1 mt-1 bg-white/80 font-normal'
                                />
                            </label>

                            <label className='text-xs w-full font-bold'>
                                {errors.speciality?.type === 'required' && (
                                    <p
                                        role='alert'
                                        className='text-center text-red-500 mb-1 w-full'
                                    >
                                        {errors.speciality?.message}
                                    </p>
                                )}
                                Especialidad
                                <select
                                    {...register('speciality', {
                                        required:
                                            'Debes elegir una especialidad',
                                    })}
                                    className='text-base w-full rounded-sm outline-none px-2 py-1 mt-1 bg-white/70 font-normal'
                                >
                                    <option value=''>
                                        Seleccione una especialidad
                                    </option>
                                    {Specialities.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </>
                    )}
                </div>

                <div className='col-span-1 p-4 flex flex-col gap-4'>
                    <label className='text-xs w-full font-bold'>
                        {errors.email?.type === 'required' && (
                            <p
                                role='alert'
                                className='text-center text-red-500 mb-1'
                            >
                                {errors.email.message}
                            </p>
                        )}
                        Email
                        <input
                            {...register('email', {
                                required: 'Debes ingresar tu Email',
                            })}
                            aria-invalid={errors.email ? 'true' : 'false'}
                            placeholder='ejemplo@mail.com'
                            className='text-base w-full rounded-sm outline-none px-2 py-1 mt-1 bg-white/80 font-normal'
                        />
                    </label>

                    <label className='text-xs w-full font-bold'>
                        {errors.password?.message && (
                            <p
                                role='alert'
                                className='text-red-500 mb-1 text-center md:w-96 flex'
                            >
                                {errors.password.message}
                            </p>
                        )}
                        Contraseña
                        <input
                            {...register('password', {
                                required: 'Debes ingresar una contraseña',
                                minLength: {
                                    value: 8,
                                    message:
                                        'La contraseña debe tener al menos 8 caracteres',
                                },
                                pattern: {
                                    value: /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&()_+])[A-Za-z\d!@#$%^&()_+]+$/,
                                    message:
                                        'La contraseña no cumple con los requisitos de seguridad',
                                },
                            })}
                            placeholder='Ingrese su contraseña'
                            className='text-base w-full rounded-sm outline-none px-2 py-1 mt-1 bg-white/80 font-normal'
                            type='password'
                        />
                    </label>

                    <label className='text-xs w-full font-bold'>
                        {errors.name?.message && (
                            <p
                                role='alert'
                                className='text-red-500 mb-1 col-2 text-center'
                            >
                                {errors.name.message}
                            </p>
                        )}
                        Calle
                        <input
                            {...register('direction.street', {
                                required: 'Debes ingresar la calle',
                                minLength: {
                                    value: 3,
                                    message: 'Debes ingresar mínimo 3 letras',
                                },
                            })}
                            placeholder='Ingrese la calle'
                            className='text-base w-full rounded-sm outline-none px-2 py-1 mt-1 bg-white/80 font-normal'
                        />
                    </label>

                    <label className='text-xs w-full font-bold'>
                        {errors.name?.message && (
                            <p
                                role='alert'
                                className='text-red-500 mb-1 col-2 text-center'
                            >
                                {errors.name.message}
                            </p>
                        )}
                        Número
                        <input
                            {...register('direction.number', {
                                required: 'Debes ingresar el número',
                                minLength: {
                                    value: 3,
                                    message:
                                        'Debes ingresar mínimo 3 caracteres',
                                },
                            })}
                            placeholder='Ingrese el número'
                            className='text-base w-full rounded-sm outline-none px-2 py-1 mt-1 bg-white/80 font-normal'
                        />
                    </label>

                    <label className='text-xs w-full font-bold'>
                        {errors.name?.message && (
                            <p
                                role='alert'
                                className='text-red-500 mb-1 col-2 text-center'
                            >
                                {errors.name.message}
                            </p>
                        )}
                        Provincia
                        <input
                            {...register('direction.province', {
                                required: 'Debes ingresar la provincia',
                                minLength: {
                                    value: 3,
                                    message: 'Debes ingresar mínimo 3 letras',
                                },
                            })}
                            placeholder='Ingrese la provincia'
                            className='text-base w-full rounded-sm outline-none px-2 py-1 mt-1 bg-white/80 font-normal'
                        />
                    </label>

                    <label className='text-xs w-full font-bold'>
                        {errors.name?.message && (
                            <p
                                role='alert'
                                className='text-red-500 mb-1 col-2 text-center'
                            >
                                {errors.name.message}
                            </p>
                        )}
                        Localidad
                        <input
                            {...register('direction.location', {
                                required: 'Debes ingresar la localidad',
                                minLength: {
                                    value: 3,
                                    message: 'Debes ingresar mínimo 3 letras',
                                },
                            })}
                            placeholder='Ingrese la localidad'
                            className='text-base w-full rounded-sm outline-none px-2 py-1 mt-1 bg-white/80 font-normal'
                        />
                    </label>
                </div>

                <button
                    type='submit'
                    className={`bg-sky-600/90 text-white hover:text-black hover:bg-sky-500/40 shadow-md p-2 rounded-md w-2/4 mx-auto col-span-2`}
                >
                    Actualizar perfil
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
