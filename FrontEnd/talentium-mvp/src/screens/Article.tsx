//import Button from './Button';
const Article: React.FC = () => {
    return (
        <article className='body-font text-gray-600 '>
            <div className='container mx-auto px-5 py-24'>
                <h1 className='title-font mb-20 text-center text-2xl font-bold text-gray-800 sm:text-3xl'>
                    ¿Cómo es el proceso?
                </h1>

                <div className='mx-4 mb-10 mt-4 flex flex-col gap-4 md:flex-1 md:flex-row '>
                    <div className='flex rounded-md bg-royal-blue-300/50 p-4 shadow-md md:w-1/3'>
                        <div className='flex-grow pl-6 '>
                            <h2 className='title-font mb-2 text-center text-lg font-bold text-gray-700 '>
                                01
                                <span className='flex justify-center gap-2'>
                                    Registro
                                </span>
                            </h2>
                            <p className='leading-relaxed text-gray-900'>
                                Ingresa a la pestaña de Registro.
                                <br />
                                Ingresa tu correo electrónico actualizad0.
                                <br />
                                Una contraseñe que recuerdes bien.
                                <br />
                                Y presiona Registrar.
                                <br />
                            </p>
                        </div>
                    </div>
                    <div className='flex rounded-md bg-royal-blue-300/50 p-4 shadow-md md:w-1/3'>
                        <div className='flex-grow pl-6 '>
                            <h2 className='title-font mb-2 text-center text-lg font-bold text-gray-700 '>
                                02
                                <span className='flex justify-center gap-2'>
                                    Contacta
                                </span>
                            </h2>
                            <p className='leading-relaxed text-gray-900'>
                                Ingresa a tu perfil.
                                <br />
                                Completa los datos en tu perfil de Cliente o
                                actualizalo a Profesional si es tu caso.
                                <br />
                                Crea órdenes o postúlate si eres un profesional.
                                <br />
                                Y conecta con profesionales y potenciales
                                clientes.
                                <br />
                            </p>
                        </div>
                    </div>
                    <div className='flex rounded-md bg-royal-blue-300/50 p-4 shadow-md md:w-1/3'>
                        <div className='flex-grow pl-6 '>
                            <h2 className='title-font mb-2 text-center text-lg font-bold text-gray-700 '>
                                03
                                <span className='flex justify-center gap-2'>
                                    Contrata
                                </span>
                            </h2>
                            <p className='leading-relaxed text-gray-900'>
                                Contáctate con el profesional o el cliente.
                                <br />
                                Coordina fechas y horarios para realizar el
                                trabajo.
                                <br />
                                Al terminar el trabajo, notifica.
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Article;
