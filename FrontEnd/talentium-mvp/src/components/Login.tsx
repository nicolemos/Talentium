import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../interfaces/LoginForm';
import useUserServices from '../hooks/useUserServices';
import NoAvatar from '/NoAvatar.png?url';
import { FaArrowLeft } from 'react-icons/fa';
import Button from './Button';

const Login: React.FC = () => {
    const { loginUser } = useUserServices();
    const navigate = useNavigate();

    const [loginForm, setLoginForm] = useState<LoginForm>({
        email: '',
        password: '',
    });

    const [error, setError] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!loginForm.email || !loginForm.password) {
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
        <div className='relative bg-royal-blue-500 w-full h-screen flex flex-col items-center justify-center gap-8 lg:bg-gradient-to-b lg:from-royal-blue-500 lg:to-white lg:p-4 lg:gap-3 lg:relative'>
            <Button
                onClick={handleback}
                customClass={
                    'w-28 h-16 absolute bottom-5 right-5 lg:top-5 lg:left-5 text-white text-xl font-bold cursor-pointer '
                }
            >
                <FaArrowLeft className='w-10 h-10 p-2' />
                atrás
            </Button>
            <form
                action=''
                className='w-72 h-96 lg:w-76 bg-royal-blue-500 flex flex-col items-center justify-center lg:flex lg:flex-col lg:items-center lg:rounded-lg lg:shadow-slate-900 lg:shadow-lg '
                onSubmit={handleSubmit}
            >
                <label className='w-screen h-screen flex flex-col items-center justify-center gap-4 lg:flex lg:flex-col lg:items-center lg:justify-center lg:m-3 lg:p-4'>
                    <div className='rounded-full mb-2 flex items-center justify-center'>
                        <img
                            src={NoAvatar}
                            alt=''
                            className='w-28 lg:w-20 h-28 lg:h-20 rounded-full'
                        />
                    </div>

                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='email'
                        value={loginForm.email}
                        onChange={handleInputChange}
                        className='text-base text-black rounded-md outline-none shadow-inner shadow-slate-900 px-2 py-1 mt-1 bg-white/80 font-normal'
                        required
                    />
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='contraseña'
                        value={loginForm.password}
                        onChange={handleInputChange}
                        className='text-base text-black rounded-md outline-none shadow-inner shadow-slate-900 px-2 py-1 mt-1 bg-white/80 font-normal'
                        required
                    />
                    <Button
                        onClick={handleSubmit}
                        customClass='flex align-center justify-center bg-royal-blue-600 lg:bg-royal-blue-500 rounded-md shadow-md p-2'
                    >
                        Ingresar
                    </Button>
                </label>
            </form>
            <div className='flex flex-col items-center justify-center '>
                {error && (
                    <p className='text-red-600 font-medium '>
                        Todos los campos son obligatorios
                    </p>
                )}
            </div>
        </div>
    );
};

export default Login;
