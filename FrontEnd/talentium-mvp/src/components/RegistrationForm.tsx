import { useForm, SubmitHandler } from 'react-hook-form';
import { RegistrationFormProps } from '../interfaces/RegisterFormTypes';
import { toast } from 'react-toastify';

import useCreateUser from '../hooks/useUserServices';

const Specialities = [
    'Abogado',
    'Plomero',
    'Ingeniero',
    'Jardinero',
    'Electricista',
];

const RegisterForm: React.FC<RegistrationFormProps> = ({ userType }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<RegistrationFormProps>();

    const { createUser } = useCreateUser();

    const onSubmit: SubmitHandler<RegistrationFormProps> = async (data) => {
        try {
            console.log(data);

            const userCreated = await createUser(data);

            if (userCreated) {
                toast.success('Te has registrado exitosamente!');
            } else {
                toast.error(
                    'Hubo un error con el registro, vuelve a intentarlo'
                );
            }
        } catch (error) {
            console.error('Error during form submission:', error);
            toast.error('Ha ocurrido un error inesperado');
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`bg-white/45 w-full p-4 py-8 rounded-lg shadow-lg justify-between grid grid-cols-2 grid-rows-6 sm:max-w-md ${
                userType === 'Cliente' ? 'gap-1' : 'gap-2'
            }`}
        >
            <h2 className='text-xl font-bold mb-4 col-span-2 text-center w-full'>
                Registro &gt; {`${userType}`}
            </h2>

            <label className='text-xs w-full col-1 font-bold row-start-2 col-span-2 md:w-3/5 md:mx-auto'>
                {errors.name?.message && (
                    <p
                        role='alert'
                        className='text-red-500 mb-1 col-2 text-center'
                    >
                        {errors.name.message}
                    </p>
                )}
                Nombre*
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

            <label className='text-xs w-full sm:col-1 font-bold row-start-3 col-span-2 md:w-3/5 md:mx-auto'>
                {errors.surname?.type === 'required' && (
                    <p role='alert' className='text-center text-red-500 mb-1'>
                        {errors.surname.message}
                    </p>
                )}
                Apellido*
                <input
                    {...register('surname', {
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
                <label className='text-xs w-full font-bold row-start-4 col-span-2 md:w-3/5 md:mx-auto'>
                    {errors.speciality?.type === 'required' && (
                        <p
                            role='alert'
                            className='text-center text-red-500 mb-1 w-full'
                        >
                            {errors.speciality?.message}
                        </p>
                    )}
                    Especialidad*
                    <select
                        {...register('speciality', {
                            required: 'Debes elegir una especialidad',
                        })}
                        className='text-base w-full rounded-sm outline-none px-2 py-1 mt-1 bg-white/70 font-normal'
                    >
                        <option value=''>Seleccione una especialidad</option>
                        {Specialities.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>
            )}

            <label
                className={`text-xs w-full sm:col-1 font-bold ${
                    userType === 'Cliente' ? 'row-start-4' : 'row-start-5'
                } col-span-2 md:w-3/5 md:mx-auto`}
            >
                {errors.mail?.type === 'required' && (
                    <p role='alert' className='text-center text-red-500 mb-1'>
                        {errors.mail.message}
                    </p>
                )}
                Email*
                <input
                    {...register('mail', {
                        required: 'Debes ingresar tu Email',
                    })}
                    aria-invalid={errors.mail ? 'true' : 'false'}
                    placeholder='ejemplo@mail.com'
                    className='text-base w-full rounded-sm outline-none px-2 py-1 mt-1 bg-white/80 font-normal'
                />
            </label>

            <label
                className={`text-xs w-full sm:col-1 font-bold ${
                    userType === 'Cliente' ? 'row-start-5' : 'row-start-6'
                } col-span-2 md:w-3/5 md:mx-auto`}
            >
                {errors.password?.message && (
                    <p
                        role='alert'
                        className='text-red-500 mb-1 text-center md:w-96 flex'
                    >
                        {errors.password.message}
                    </p>
                )}
                Contraseña*
                <input
                    {...register('password', {
                        required: 'Debes ingresar una contraseña',
                        minLength: {
                            value: 8,
                            message:
                                'La contraseña debe tener al menos 8 caracteres',
                        },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
                            message:
                                'La contraseña no cumple con los requisitos de seguridad',
                        },
                    })}
                    placeholder='Ingrese su contraseña'
                    className='text-base w-full rounded-sm outline-none px-2 py-1 mt-1 bg-white/80 font-normal'
                    type='password'
                />
            </label>

            <button
                type='submit'
                className={`bg-sky-600/90 text-white hover:text-black hover:bg-sky-500/40 shadow-md p-2 rounded-md w-full mt-8 ${
                    userType === 'Cliente' ? 'row-start-6' : 'row-start-7'
                } col-span-2 sm:w-2/4 sm:mx-auto`}
            >
                Registrarse
            </button>
        </form>
    );
};

export default RegisterForm;
