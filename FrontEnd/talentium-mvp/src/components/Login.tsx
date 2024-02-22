import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../interfaces/LoginForm';
import { useAuth } from '../context/AuthContext';
import NoAvatar from '/NoAvatar.png?url';
import { FaArrowLeft } from 'react-icons/fa';

const Login: React.FC = () => {
    const auth = useAuth();

    const navigate = useNavigate();

    const [loginForm, setLoginForm] = useState<LoginForm>({
        name: '',
        email: '',
        photoUrl: '',
        password: '',
    });

    const [error, setError] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        auth.login({
            photoUrl: loginForm.photoUrl,
            name: loginForm.name,
            email: loginForm.email,
        });

        if (!loginForm.email || !loginForm.password) {
            setError('Todos los campos son obligatorios');
            return;
        }
        console.log('formulario enviado', loginForm);
        navigate('/');
    };

    const handleback = () => {
        navigate('/');
    };

    return (
        <div className="bg-gradient-to-b from-royal-blue-500 to-white h-screen flex flex-col items-center justify-center p-4 gap-3">
                <button type="button" onClick={handleback} className="absolute flex items-center p-3 m-3 top-5 left-5 text-white text-xl font-bold cursor-pointer">
                    <FaArrowLeft className="w-10 h-10 p-2" />atrás
                </button>
            <form
                action=""
                className="mx-auto w-60 h-72 bg-royal-blue-500 flex flex-col items-center rounded-lg shadow-slate-900 shadow-lg"
                onSubmit={handleSubmit}
            >
                <label className="flex flex-col items-center justify-center m-3 p-4">
                    <div className="rounded-full mb-2 flex items-center justify-center">
                        <img
                            src={NoAvatar}
                            alt=""
                            className="w-20 h-20 rounded-full"
                        />
                    </div>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={loginForm.email}
                        onChange={handleInputChange}
                        className="w-30 rounded-md m-2 px-3 shadow-inner shadow-slate-900"
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="contraseña"
                        value={loginForm.password}
                        onChange={handleInputChange}
                        className="w-30 rounded-md m-2 px-3 shadow-inner shadow-slate-900"
                        required
                    />
                    <button
                        type="submit"
                        className="text-white p-1 m-3 focus:outline-none hover:bg-gradient-to-t from-royal-blue-800 rounded-md"
                    >
                        Entrar
                    </button>
                </label>
            </form>
            {error && (
                <p className="text-red-600 font-medium">
                    Todos los campos son obligatorios
                </p>
            )}
        </div>
    );
};

export default Login;
