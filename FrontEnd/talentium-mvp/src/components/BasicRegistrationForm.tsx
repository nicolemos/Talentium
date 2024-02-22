import { useState } from 'react';import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';
import { RegistrationFormProps } from '../interfaces/RegisterFormTypes';
import { toast } from 'react-toastify';
import NoAvatar from '/NoAvatar.png?url';

import useUserServices from '../hooks/useUserServices';

const MAX_FILE_SIZE_BYTES = 102400; // 100KB

const RegisterForm: React.FC<RegistrationFormProps> = () => {
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const [showCloseIcon, setShowCloseIcon] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<RegistrationFormProps>();

    const { createUser } = useUserServices();

    const onSubmit: SubmitHandler<RegistrationFormProps> = async (data) => {
        try {
            // localstorage y el navigate no van acá, debería ir luego del await createUser(data). Lo coloqué simplemente para probar que redirija bien al dashboard ya que falta la conexion a DB para hacer el POST-
            localStorage.setItem('mail', JSON.stringify(data.mail));
            navigate('/');
            ///////////////////////////////////////
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

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            if (file.size > MAX_FILE_SIZE_BYTES) {
                alert(
                    `El archivo excede el máximo peso permitido. Máximo peso permitido: 100KB.`
                );
                e.target.value = '';
                return;
            }

            const reader = new FileReader();

            reader.onloadend = () => {
                setAvatarPreview(reader.result as string);
            };

            reader.readAsDataURL(file);
        } else {
            setAvatarPreview(null);
        }
    };

    const clearAvatar = () => {
        setAvatarPreview(null);
        const fileInput = document.getElementById(
            'avatar-input'
        ) as HTMLInputElement;
        if (fileInput) {
            fileInput.value = '';
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`bg-white/45 w-full p-4 py-8 rounded-lg shadow-lg justify-between grid grid-cols-2 grid-rows-4 sm:max-w-md gap-4`}
            style={{ gridTemplateRows: 'auto auto auto auto' }}
        >
            <h2 className='text-xl font-bold col-span-2 text-center my-auto w-full'>
                Registro Talentium
            </h2>

            <div
                className='flex col-span-2 justify-center w-full h-full'
                onMouseEnter={() => setShowCloseIcon(true)}
                onMouseLeave={() => setShowCloseIcon(false)}
            >
                <img
                    src={avatarPreview ? avatarPreview : NoAvatar}
                    alt='Avatar Preview'
                    style={{
                        width: '100px',
                        height: '100px',
                        cursor: 'pointer',
                    }}
                    className='rounded-full object-fill'
                />
                {showCloseIcon && avatarPreview && (
                    <IoCloseOutline
                        className='absolute cursor-pointer ml-28 text-red-500 text-xl bg-black/20 rounded-full'
                        title='Borrar Avatar'
                        onClick={clearAvatar}
                    />
                )}
            </div>

            <label
                className={`text-xs w-full sm:col-1 font-bold col-span-2 md:w-3/5 md:mx-auto`}
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
                    type='email'
                    id='email-input'
                />
            </label>

            <label
                className={`text-xs w-full sm:col-1 font-bold col-span-2 md:w-3/5 md:mx-auto`}
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
                    id='password-input'
                />
            </label>

            <label
                className={`text-md w-full sm:col-1 font-bold col-span-2 text-center md:w-3/5 md:mx-auto`}
            >
                Avatar (opcional):
                <input
                    type='file'
                    {...register('avatar')}
                    accept='image/*'
                    onChange={handleAvatarChange}
                    className='text-xs'
                    id='avatar-input'
                />
            </label>

            <button
                type='submit'
                className={`bg-royal-blue-500 text-white hover:text-black hover:bg-royal-blue-500/70 shadow-md p-2 rounded-md w-full mt-8 col-span-2 sm:w-2/4 sm:mx-auto`}
            >
                Registrarse
            </button>
        </form>
    );
};

export default RegisterForm;
