import { FaArrowLeft } from 'react-icons/fa';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

const TermsAndConditionsPage = () => {

   const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
  };
  
    return (
        <div className='min-h-screen bg-gradient-to-b from-royal-blue-500 to-royal-blue-100'>
            <div className='container relative mx-auto px-5 py-12'>
                <div className='absolute left-0 top-0 z-50'>
                    <CustomButton
                        onClick={handleBack}
                        customClass='w-24 text-white text-md md:text-xl font-bold cursor-pointer'
                    >
                        <FaArrowLeft className='h-10 w-10 p-2' />
                        Atrás
                    </CustomButton>
                </div>
                <h1 className='mb-8 text-center text-3xl font-bold text-gray-800'>
                    Términos y Condiciones de Uso
                </h1>

                <div className='rounded-lg bg-gradient-to-b from-royal-blue-500 to-royal-blue-100 p-8 text-gray-800 shadow-md'>
                    <h2 className='mb-4 text-xl font-bold'>
                        1. Uso de la Plataforma
                    </h2>
                    <p className='mb-4'>
                        <span className='font-bold'>1.1. Uso Aceptable:</span>{' '}
                        Talentium es una plataforma destinada a conectar a
                        usuarios con profesionales para la prestación de
                        servicios. Al utilizar nuestra plataforma, aceptas
                        utilizarla únicamente para los fines previstos y cumplir
                        con todas las leyes y regulaciones aplicables.
                    </p>
                    <p>
                        <span className='font-bold'>1.2. Registro:</span> Para
                        acceder a ciertas funciones de Talentium, es posible que
                        necesites registrarte y crear una cuenta. Al
                        registrarte, aceptas proporcionar información precisa y
                        actualizada y mantener la confidencialidad de tu cuenta
                        y contraseña.
                    </p>

                    <h2 className='mb-4 mt-8 text-xl font-bold'>
                        2. Servicios
                    </h2>
                    <p className='mb-4'>
                        <span className='font-bold'>
                            2.1. Servicios Prestados:
                        </span>{' '}
                        Talentium actúa como un intermediario entre usuarios y
                        profesionales para la prestación de servicios. No somos
                        responsables de la calidad o idoneidad de los servicios
                        prestados por los profesionales.
                    </p>
                    <p>
                        <span className='font-bold'>2.2. Pagos:</span> Los pagos
                        por los servicios prestados a través de Talentium se
                        realizan directamente entre el usuario y el profesional.
                        Talentium no se hace responsable de los problemas
                        relacionados con los pagos.
                    </p>

                    <h2 className='mb-4 mt-8 text-xl font-bold'>
                        3. Propiedad Intelectual
                    </h2>
                    <p className='mb-4'>
                        <span className='font-bold'>
                            3.1. Derechos de Autor:
                        </span>{' '}
                        Todo el contenido y los materiales disponibles en
                        Talentium, incluyendo pero no limitado a texto,
                        gráficos, logotipos, imágenes y software, están
                        protegidos por derechos de autor y otras leyes de
                        propiedad intelectual.
                    </p>
                    <p>
                        <span className='font-bold'>
                            3.2. Uso del Contenido:
                        </span>{' '}
                        Se te concede una licencia limitada, no exclusiva y no
                        transferible para acceder y utilizar el contenido de
                        Talentium únicamente para fines personales y no
                        comerciales.
                    </p>

                    <h2 className='mb-4 mt-8 text-xl font-bold'>
                        4. Modificaciones y Terminación
                    </h2>
                    <p className='mb-4'>
                        <span className='font-bold'>4.1. Modificaciones:</span>{' '}
                        Nos reservamos el derecho de modificar o actualizar
                        estos términos y condiciones en cualquier momento sin
                        previo aviso. Te recomendamos que revises periódicamente
                        estos términos para estar al tanto de cualquier cambio.
                    </p>
                    <p>
                        <span className='font-bold'>4.2. Terminación:</span> Nos
                        reservamos el derecho de suspender o terminar tu acceso
                        a Talentium en cualquier momento y por cualquier motivo,
                        sin previo aviso.
                    </p>

                    <h2 className='mb-4 mt-8 text-xl font-bold'>
                        5. Limitación de Responsabilidad
                    </h2>
                    <p className='mb-4'>
                        <span className='font-bold'>
                            5.1. Uso bajo tu Propio Riesgo:
                        </span>{' '}
                        El uso de Talentium se realiza bajo tu propio riesgo. No
                        garantizamos la disponibilidad, fiabilidad o seguridad
                        de nuestra plataforma y no seremos responsables de
                        ningún daño directo, indirecto, incidental, especial o
                        consecuente que surja del uso de Talentium.
                    </p>

                    <h2 className='mb-4 mt-8 text-xl font-bold'>
                        6. Ley Aplicable
                    </h2>
                    <p>
                        <span className='font-bold'>6.1. </span> Estos términos
                        y condiciones se rigen por las leyes del país donde
                        Talentium está registrada.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditionsPage;
