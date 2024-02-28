import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Footer: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <footer className='text-gray-900'>
            <div className='grid grid-cols-3 gap-4 items-center p-4 my-9 md:grid md:grid-cols-2 md:content-center md:items-center lg:grid lg:grid-cols-4 '>
                <div className='col-span-2 md:grid md:col-span-1  '>
                    <Link to='/'>
                        <img
                            src='/Logo2.png'
                            alt=''
                            className='w-64 h-auto bg-royal-blue-500'
                        />
                    </Link>
                </div>

                <div className='col-span-1 md:grid md:col-span-1 md:text-md lg:text-lg  '>
                    <h4 className='text-md text-semibold text-gray-800 md:text-lg lg:text-xl'>
                        Links
                    </h4>
                    <ul>
                        {user?.email ? (
                            <li>
                                <button type='button' onClick={handleLogout}>
                                    Cerrar sesión
                                </button>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <Link to='/Login'>Ingresar</Link>
                                </li>
                                <li>
                                    <Link to='/Register'>Registrate</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                <div className='col-span-3 md:grid md:col-span-1 md:text-md lg:text-lg '>
                    <h4 className='text-md text-semibold text-gray-800 md:text-lg lg:text-xl '>
                        +Info
                    </h4>
                    <ul>
                        <li>
                            <Link to='/acerca-de'>Acerca de</Link>
                        </li>
                        <li>
                            <Link to='/preguntas-frecuentes'>
                                Preguntas Frecuentes
                            </Link>
                        </li>
                        <li>
                            <Link to='/terminos-y-condiciones'>
                                Términos y condiciones
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='col-span-3 md:grid md:col-span-1 md:text-md lg:text-lg  '>
                    <h4 className='text-md text-semibold text-gray-800 md:text-lg lg:text-xl '>
                        Contacto
                    </h4>
                    <p>Dirección: Calle Pichincha n°1234</p>
                    <p>Teléfono: 111-111-1111</p>
                    <p>Email: contacto@talentium.com</p>
                </div>
            </div>

            <div className='bg-royal-blue-500 text-center'>
                <span className='text-md text-semibold text-white md:text-lg lg:text-xl'>
                    &copy;{currentYear} No Country - Team C16-84-FT-JAVA.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
