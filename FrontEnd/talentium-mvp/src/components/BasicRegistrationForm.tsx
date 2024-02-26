import { useState } from 'react';import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';
import { BasicRegistrationFormProps } from '../interfaces/RegistrationFormTypes';
import { toast } from 'react-toastify';
import NoAvatar from '/NoAvatar.png?url';
import { FaArrowLeft } from 'react-icons/fa';
import Button from './Button';

import useUserServices from '../hooks/useUserServices';

const MAX_FILE_SIZE_BYTES = 102400; // 100KB

const BasicRegistrationForm: React.FC<BasicRegistrationFormProps> = () => {
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const [showCloseIcon, setShowCloseIcon] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<BasicRegistrationFormProps>();

    const { createUser } = useUserServices();

    const onSubmit: SubmitHandler<BasicRegistrationFormProps> = async (
        data
    ) => {
        try {
            const userCreated = await createUser(data);

            if (userCreated) {
                toast.success('Te has registrado exitosamente!');
                localStorage.setItem('email', JSON.stringify(data.email));
                navigate('/');
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

    const handleback = () => {
        navigate('/');
    };

    return (
        <>
            <Button
                onClick={handleback}
                customClass={
                    'absolute flex items-center p-3 m-3 top-5 left-5 text-white text-xl font-bold cursor-pointer'
                }
            >
                <FaArrowLeft className='w-10 h-10 p-2' />
                atrás
            </Button>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className={`bg-royal-blue-500 w-2/4 p-4 py-8 rounded-lg shadow-slate-900 shadow-lg flex flex-col items-center justify-center`}
                style={{ gridTemplateRows: 'auto auto auto auto' }}
            >
                <h2 className='text-white text-xl font-bold col-span-2 text-center my-auto w-full'>
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
                    className={`text-white text-sm w-full sm:col-1 font-bold col-span-2 md:w-3/5 md:mx-auto`}
                >
                    {errors.email?.type === 'required' && (
                        <p
                            role='alert'
                            className='text-center text-red-500 mb-1'
                        >
                            {errors.email.message}
                        </p>
                    )}
                    Email*
                    <input
                        {...register('email', {
                            required: 'Debes ingresar tu Email',
                        })}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        placeholder='ejemplo@mail.com'
                        className='text-base w-full rounded-md outline-none shadow-inner shadow-slate-900 px-2 py-1 mt-1 bg-white/80 font-normal'
                        type='email'
                        id='email-input'
                    />
                </label>

                <label
                    className={`text-white text-sm w-full sm:col-1 font-bold col-span-2 md:w-3/5 md:mx-auto`}
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
                        className='text-base text-black w-full rounded-md outline-none shadow-inner shadow-slate-900 px-2 py-1 mt-1 bg-white/80 font-normal'
                        type='password'
                        id='password-input'
                    />
                </label>

                <label
                    className={`text-white text-md w-full sm:col-1 font-bold col-span-2 text-center md:w-3/5 md:mx-auto`}
                >
                    Avatar (opcional):
                    <input
                        type='text'
                        {...register('avatar')}
                        accept='image/*'
                        onChange={handleAvatarChange}
                        className='text-xs'
                        id='avatar-input'
                    />
                </label>

                <Button
                    onClick={handleSubmit(onSubmit)}
                    customClass='bg-royal-blue-500 flex items-center rounded-md shadow-md p-4 m-8'
                >
                    Registrarse
                </Button>
            </form>
        </>
    );
};

export default BasicRegistrationForm;
