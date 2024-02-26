import { useState } from 'react';import { useNavigate } from 'react-router-dom';
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
        <div className='bg-gradient-to-b from-royal-blue-500 to-white h-screen flex flex-col items-center justify-center p-4 gap-3'>
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
                action=''
                className='mx-auto w-60 h-72 bg-royal-blue-500 flex flex-col items-center rounded-lg shadow-slate-900 shadow-lg'
                onSubmit={handleSubmit}
            >
                <label className='flex flex-col items-center justify-center m-3 p-4'>
                    <div className='rounded-full mb-2 flex items-center justify-center'>
                        <img
                            src={NoAvatar}
                            alt=''
                            className='w-20 h-20 rounded-full'
                        />
                    </div>

                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='email'
                        value={loginForm.email}
                        onChange={handleInputChange}
                        className='w-30 rounded-md m-2 px-3 outline-none shadow-inner shadow-slate-900'
                        required
                    />
                    <input
                        type='password'
                        id='contrasenia'
                        name='contrasenia'
                        placeholder='contraseña'
                        value={loginForm.password}
                        onChange={handleInputChange}
                        className='w-30 rounded-md m-2 px-3 outline-none shadow-inner shadow-slate-900'
                        required
                    />
                    <Button
                        onClick={handleSubmit}
                        customClass='bg-royal-blue-500 rounded-md shadow-md p-8 m-4'
                    >
                        Ingresar
                    </Button>
                </label>
            </form>
            {error && (
                <p className='text-red-600 font-medium'>
                    Todos los campos son obligatorios
                </p>
            )}
        </div>
    );
};

export default Login;
