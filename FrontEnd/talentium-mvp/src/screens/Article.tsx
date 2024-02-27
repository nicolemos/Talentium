//import Button from './Button';
const Article: React.FC = () => {
    return (
        <article className='my-4 flex flex-col items-center justify-center p-4 md:flex md:flex-col md:items-center md:justify-center md:gap-6 lg:m-8 lg:p-8 '>
            <h2 className='my-4 py-2 text-3xl font-bold text-gray-700 lg:text-5xl'>
                ¿Cómo es el proceso?
            </h2>

            <div className='flex flex-col items-center justify-center gap-6 md:flex md:flex-col md:items-center md:justify-center md:p-16 lg:flex lg:flex-row lg:items-center lg:justify-around '>
                <div className='m-4 flex flex-col items-center justify-center gap-2 p-2 md:flex md:flex-col md:gap-6 lg:flex lg:flex-col lg:gap-6 '>
                    <h3 className='flex flex-col items-center justify-center gap-2 text-2xl font-semibold text-gray-600 md:flex md:flex-col md:gap-4 lg:text-4xl '>
                        01<span className='flex flex-col gap-2'>Registro</span>
                    </h3>
                    <p className='text-center text-xl font-medium text-gray-800 md:p-4 lg:p-4 lg:text-2xl '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque eveniet porro nisi ex maiores enim voluptatum
                        fuga voluptates saepe illum necessitatibus aliquid.
                    </p>
                </div>

                <div className='m-4 flex flex-col items-center justify-center gap-2 p-2 md:flex md:flex-col md:gap-6 lg:flex lg:flex-col lg:gap-6 '>
                    <h3 className='flex flex-col items-center justify-center gap-2 text-2xl font-semibold text-gray-600 md:flex md:flex-col md:gap-4 lg:text-4xl '>
                        02<span>Contacta</span>
                    </h3>
                    <p className='text-center text-xl font-medium text-gray-800 md:p-4 lg:p-4 lg:text-2xl '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque eveniet porro nisi ex maiores enim voluptatum
                        fuga voluptates saepe illum necessitatibus aliquid.
                    </p>
                </div>

                <div className='m-4 flex flex-col items-center justify-center gap-2 p-2 md:flex md:flex-col md:gap-6 lg:flex lg:flex-col lg:gap-6 '>
                    <h3 className='flex flex-col items-center justify-center gap-2 text-2xl font-semibold text-gray-600 md:flex md:flex-col md:gap-4 lg:text-4xl '>
                        03<span>Contrata</span>
                    </h3>
                    <p className='text-center text-xl font-medium text-gray-800 md:p-4 lg:p-4 lg:text-2xl '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque eveniet porro nisi ex maiores enim voluptatum
                        fuga voluptates saepe illum necessitatibus aliquid.
                    </p>
                </div>
            </div>
        </article>
    );
};

export default Article;
