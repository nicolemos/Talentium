import FaqDesplegable from "../components/FaqDesplegable";
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';


const FaqSection = () => {

   const navigate = useNavigate();

  const handleback = () => {
    navigate('/');
  };

    return (
        <section className='body-font min-h-screen bg-gradient-to-b from-royal-blue-500 to-royal-blue-100 text-gray-600'>
            <div className='container mx-auto max-w-3xl px-5 py-24'>
                <div className='absolute left-0 top-0 z-50'>
                    <CustomButton
                        onClick={handleback}
                        customClass='z-50 absolute top-20 left-10 md:left-64 xl:left-72 w-24 text-white text-md md:text-xl font-bold cursor-pointer'
                    >
                        <FaArrowLeft className='h-10 w-10 p-2' />
                        Atrás
                    </CustomButton>
                </div>
                <h1 className='title-font mb-20 text-center text-2xl font-bold text-gray-800 sm:text-3xl '>
                    Preguntas Frecuentes
                </h1>

                <div className='mx-4 mb-10 mt-4 flex flex-col gap-4 md:flex-1 md:flex-col'>
                    <FaqDesplegable
                        question='¿Qué tipo de servicios ofrece Talentium?'
                        answer='Talentium ofrece una amplia gama de servicios profesionales, que van desde plomería y electricidad hasta diseño gráfico y mucho más. Nuestra plataforma te permite conectar con profesionales confiables para satisfacer tus necesidades de manera segura y eficiente.'
                    />

                    <FaqDesplegable
                        question='¿Cómo puedo registrarme en Talentium?'
                        answer='Registrarse en Talentium es fácil y rápido. Simplemente visita nuestra página web y haz clic en el botón de registro. Completa el formulario con tus datos personales y estarás listo para comenzar a explorar nuestra plataforma y descubrir todas las posibilidades que ofrecen nuestros talentosos profesionales.'
                    />

                    <FaqDesplegable
                        question='¿Puedo ofrecer mis servicios en Talentium?'
                        answer='¡Por supuesto! En Talentium, no solo puedes buscar servicios, sino que también puedes ofrecer los tuyos. Si posees habilidades especiales, puedes registrarte como profesional y ofrecer tus servicios para ganar dinero extra en tu tiempo libre. Aprovecha al máximo tus talentos y alcanza tus objetivos con Talentium.'
                    />

                    <FaqDesplegable
                        question='¿Cómo se garantiza la seguridad de mis datos personales en Talentium?'
                        answer='En Talentium, nos tomamos muy en serio la seguridad y confidencialidad de tus datos personales. Utilizamos servidores de alta seguridad para garantizar la protección de tus datos. Además, todas las transacciones se manejan de forma segura a través de nuestra plataforma, brindándote la tranquilidad que mereces en cada paso del proceso.'
                    />

                    <FaqDesplegable
                        question='¿Cómo puedo calificar el desempeño de un profesional en Talentium?'
                        answer='Una vez que tu solicitud ha sido completada, puedes expresar tu satisfacción calificando el desempeño del profesional. Tu opinión es importante para nosotros y ayuda a mantener la calidad de nuestros servicios. Así que no dudes en dejar tu calificación y comentario después de cada servicio.'
                    />
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
