import React, { useState } from "react";import { useNavigate } from "react-router-dom";
import { LoginForm } from "../interfaces/LoginForm";
import NoAvatar from "../../public/NoAvatar.png?url";
import useCreateUser from "../hooks/useCreateUser";

const Login: React.FC = () => {
    const { loginUser } = useCreateUser();
    const navigate = useNavigate();

    const [loginForm, setLoginForm] = useState<LoginForm>({
        email: "",
        contrasenia: "",
    });

    const [error, setError] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!loginForm.email || !loginForm.contrasenia) {
            setError("Todos los campos son obligatorios");
            return;
        }

        try {
            const isLoginSuccessful = await loginUser(loginForm);

            if (isLoginSuccessful) {
                console.log("Login successful");
                navigate("/");
            } else {
                setError("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("An error occurred during login. Please try again later.");
        }
    };


    return (
        <div className='bg-gradient-to-b from-royal-blue-500 to-white h-screen flex flex-col items-center justify-center p-4 gap-3'>
            <form
                action=''
                className='mx-auto w-60 h-56 bg-gradient-to-b from-royal-blue-500 flex flex-col items-center rounded-xl shadow-slate-900 shadow-lg'
                onSubmit={handleSubmit}
            >
                <label className='flex flex-col items-center justify-center m-3 p-4'>
                    <div className='bg-royal-blue-900 w-16 h-16 rounded-full mb-2 flex items-center justify-center'>
                        <img
                            src={NoAvatar}
                            alt=''
                            className='w-14 h-14 rounded-full'
                        />
                    </div>

                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='email'
                        value={loginForm.email}
                        onChange={handleInputChange}
                        className='w-30 rounded-md m-1 px-2 shadow-inner shadow-slate-900'
                        required
                    />
                    <input
                        type='password'
                        id='contrasenia'
                        name='contrasenia'
                        placeholder='contraseña'
                        value={loginForm.contrasenia}
                        onChange={handleInputChange}
                        className='w-30 rounded-md m-1 px-2 shadow-inner shadow-slate-900'
                        required
                    />
                    <button
                        type='submit'
                        className='bg-royal-blue-800 hover:bg-royal-blue-950 text-white w-30 rounded-md m-1 px-2 mt-4 shadow-md shadow-slate-900'
                    >
                        Entrar
                    </button>
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
