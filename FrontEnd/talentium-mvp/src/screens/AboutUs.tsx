import { FaArrowLeft } from 'react-icons/fa';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

const AboutUsPage = () => {
    const navigate = useNavigate();

    const handleback = () => {
        navigate('/');
    };

    return (
        <div className='min-h-screen bg-gradient-to-b from-royal-blue-500 to-royal-blue-100'>
            <div className='container relative mx-auto px-5 py-12'>
                <div className='absolute left-0 top-0 z-50'>
                    <CustomButton
                        onClick={handleback}
                        customClass='w-24 text-white text-md md:text-xl font-bold cursor-pointer'
                    >
                        <FaArrowLeft className='h-10 w-10 p-2' />
                        atrás
                    </CustomButton>
                </div>
                <h1 className='mb-8 text-center text-3xl font-bold text-black'>
                    Acerca de Talentium
                </h1>

                <div className='mx-auto max-w-3xl rounded-lg bg-white/60 p-8 text-black shadow-md'>
                    <p className='mb-4'>
                        Talentium es una plataforma en línea que conecta a
                        usuarios con profesionales de diversos campos para la
                        prestación de servicios. Ya sea que necesites un
                        plomero, un electricista, un diseñador gráfico o
                        cualquier otro servicio, en Talentium encontrarás la
                        solución perfecta.
                    </p>

                    <p className='mb-4'>
                        Nuestra misión es proporcionar una plataforma segura y
                        eficiente donde los usuarios puedan encontrar a
                        profesionales confiables para satisfacer sus
                        necesidades, y donde los profesionales puedan ofrecer
                        sus servicios y generar ingresos adicionales en su
                        tiempo libre.
                    </p>

                    <p className='mb-4'>
                        En Talentium, nos comprometemos a garantizar la calidad
                        y la satisfacción del cliente en todas las
                        transacciones. Nuestra plataforma cuenta con sistemas de
                        seguridad y protección de datos para garantizar la
                        privacidad y confidencialidad de nuestros usuarios.
                    </p>

                    <p>
                        Únete a Talentium hoy mismo y descubre todas las
                        posibilidades que ofrecen nuestros talentosos
                        profesionales. ¡Aprovecha al máximo tus talentos y
                        alcanza tus objetivos con Talentium!
                    </p>
                </div>
            </div>
        </div>
    );
};
export default AboutUsPage;