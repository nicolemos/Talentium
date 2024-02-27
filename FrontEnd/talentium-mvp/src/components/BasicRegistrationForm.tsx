import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';
import { BasicRegistrationFormProps } from '../interfaces/RegistrationFormTypes';
import { ToastContainer, toast } from 'react-toastify';
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
        data,
    ) => {
        try {
            const userCreated = await createUser(data);

            if (userCreated) {
                toast.success('Te has registrado exitosamente!');
                localStorage.setItem('email', JSON.stringify(data.email));
                navigate('/');
            } else {
                toast.error(
                    'Hubo un error con el registro, vuelve a intentarlo',
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
                    `El archivo excede el máximo peso permitido. Máximo peso permitido: 100KB.`,
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
            'avatar-input',
        ) as HTMLInputElement;
        if (fileInput) {
            fileInput.value = '';
        }
    };

    const handleback = () => {
        navigate('/');
    };

    return (
        <div className='flex h-screen w-full flex-col items-center justify-center gap-8 bg-royal-blue-500 lg:gap-3 lg:bg-gradient-to-b lg:from-royal-blue-500 lg:to-white lg:p-4'>
            <Button
                onClick={handleback}
                customClass={
                    'w-28 h-16 absolute bottom-5 right-5 text-white text-xl font-bold lg:top-5 lg:left-5 cursor-pointer '
                }
            >
                <FaArrowLeft className='h-10 w-10 p-2' />
                atrás
            </Button>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex h-auto w-72 flex-col items-center justify-center gap-4 bg-royal-blue-500 md:w-2/4 lg:rounded-lg lg:shadow-lg lg:shadow-slate-900 xl:w-4/12'
                style={{ gridTemplateRows: 'auto auto auto auto' }}
            >
                <h2 className='col-span-2 my-auto w-full py-4 text-center text-xl font-bold text-white'>
                    Registro Talentium
                </h2>

                <div
                    className='col-span-2 flex h-full w-full justify-center'
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
                            className='absolute ml-28 cursor-pointer rounded-full bg-black/20 text-xl text-red-500'
                            title='Borrar Avatar'
                            onClick={clearAvatar}
                        />
                    )}
                </div>

                <label
                    className={`sm:col-1 col-span-2 w-full text-sm font-bold text-white md:mx-auto md:w-3/5`}
                >
                    {errors.email?.type === 'required' && (
                        <p
                            role='alert'
                            className='mb-1 text-center text-red-500'
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
                        className='mt-1 w-full rounded-md bg-white/80 px-2 py-1 text-base font-normal text-black shadow-inner shadow-slate-900 outline-none'
                        type='email'
                        id='email-input'
                    />
                </label>

                <label
                    className={`sm:col-1 col-span-2 w-full text-sm font-bold text-white md:mx-auto md:w-3/5`}
                >
                    {errors.password?.message && (
                        <p
                            role='alert'
                            className='mb-1 flex text-center text-red-500 md:w-96'
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
                        className='mt-1 w-full rounded-md bg-white/80 px-2 py-1 text-base font-normal text-black shadow-inner shadow-slate-900 outline-none'
                        type='password'
                        id='password-input'
                    />
                </label>

                <label
                    className={`text-md sm:col-1 col-span-2 w-full text-center font-bold text-white md:mx-auto md:w-3/5`}
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

                <Button
                    onClick={handleSubmit(onSubmit)}
                    customClass='bg-royal-blue-500 flex items-center rounded-md shadow-md p-4 m-8'
                >
                    Registrarse
                </Button>
                <ToastContainer />
            </form>
        </div>
    );
};

export default BasicRegistrationForm;
