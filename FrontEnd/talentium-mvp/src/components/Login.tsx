import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../interfaces/LoginForm';
import useUserServices from '../hooks/useUserServices';
import NoAvatar from '/NoAvatar.png?url';
import { FaArrowLeft } from 'react-icons/fa';
import CustomButton from './CustomButton';

const Login: React.FC = () => {
    const { loginUser } = useUserServices();
    const navigate = useNavigate();

    const [loginForm, setLoginForm] = useState<LoginForm>({
        email: '',
        contrasenia: '',
    });

    const [error, setError] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!loginForm.email || !loginForm.contrasenia) {
            setError('Todos los campos son obligatorios');
            return;
        }

        try {
            const isLoginSuccessful = await loginUser(loginForm);

            if (isLoginSuccessful) {
                console.log('Login successful');

                navigate('/DashboardCliente');
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred during login. Please try again later.');
        }
    };

    const handleback = () => {
        navigate('/');
    };

    return (
        <div className='relative flex h-screen w-full flex-col items-center justify-center gap-8 bg-royal-blue-500 lg:relative lg:gap-3 lg:bg-gradient-to-b lg:from-royal-blue-500 lg:to-white lg:p-4'>
            <CustomButton
                onClick={handleback}
                customClass={
                    'w-28 h-16 absolute bottom-5 right-5 lg:top-5 lg:left-5 text-white text-xl font-bold cursor-pointer '
                }
            >
                <FaArrowLeft className='h-10 w-10 p-2' />
                atrás
            </CustomButton>
            <form
                action=''
                className='lg:w-76 flex h-96 w-72 flex-col items-center justify-center bg-royal-blue-500 lg:flex lg:flex-col lg:items-center lg:rounded-lg lg:shadow-lg lg:shadow-slate-900 '
                onSubmit={handleSubmit}
            >
                <label className='flex h-screen w-screen flex-col items-center justify-center gap-4 lg:m-3 lg:flex lg:flex-col lg:items-center lg:justify-center lg:p-4'>
                    <div className='mb-2 flex items-center justify-center rounded-full'>
                        <img
                            src={NoAvatar}
                            alt=''
                            className='h-28 w-28 rounded-full lg:h-20 lg:w-20'
                        />
                    </div>

                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='email'
                        value={loginForm.email}
                        onChange={handleInputChange}
                        className='mt-1 rounded-md bg-white/80 px-2 py-1 text-base font-normal text-black shadow-inner shadow-slate-900 outline-none'
                        required
                    />
                    <input
                        type='contrasenia'
                        id='contrasenia'
                        name='contrasenia'
                        placeholder='contraseña'
                        value={loginForm.contrasenia}
                        onChange={handleInputChange}
                        className='mt-1 rounded-md bg-white/80 px-2 py-1 text-base font-normal text-black shadow-inner shadow-slate-900 outline-none'
                        required
                    />
                    <CustomButton
                        onClick={handleSubmit}
                        customClass='flex align-center justify-center bg-royal-blue-600 lg:bg-royal-blue-500 rounded-md shadow-md p-2'
                    >
                        Ingresar
                    </CustomButton>
                </label>
            </form>
            <div className='flex flex-col items-center justify-center '>
                {error && (
                    <p className='font-medium text-red-600 '>
                        Todos los campos son obligatorios
                    </p>
                )}
            </div>
        </div>
    );
};

export default Login;
