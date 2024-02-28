//import Button from './Button';
const Article: React.FC = () => {
    return (
        <article className='flex flex-col items-center justify-center p-4 my-4 md:flex md:flex-col md:items-center md:justify-center lg:m-8 lg:p-8 md:gap-6 '>
            <h2 className='font-bold text-3xl text-gray-700 py-2 my-4 lg:text-5xl'>
                ¿Cómo es el proceso?
            </h2>

            <div className='flex flex-col items-center justify-center gap-6 md:flex md:flex-col md:items-center md:justify-center md:p-16 lg:flex lg:flex-row lg:items-center lg:justify-around '>

                <div className='flex flex-col items-center justify-center p-2 m-4 gap-2 md:flex md:flex-col md:gap-6 lg:flex lg:flex-col lg:gap-6 '>
                    <h3 className='flex flex-col justify-center items-center font-semibold text-2xl text-gray-600 gap-2 md:flex md:flex-col md:gap-4 lg:text-4xl '>
                        01<span className='flex flex-col gap-2'>Registro</span>
                    </h3>
                    <p className='text-center font-medium text-xl text-gray-800 md:p-4 lg:text-2xl lg:p-4 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque eveniet porro nisi ex maiores enim voluptatum
                        fuga voluptates saepe illum necessitatibus aliquid.
                    </p>
                </div>

                <div className='flex flex-col items-center justify-center p-2 m-4 gap-2 md:flex md:flex-col md:gap-6 lg:flex lg:flex-col lg:gap-6 '>
                    <h3 className='flex flex-col justify-center items-center font-semibold text-2xl text-gray-600 gap-2 md:flex md:flex-col md:gap-4 lg:text-4xl '>
                        02<span>Contacta</span>
                    </h3>
                    <p className='text-center font-medium text-xl text-gray-800 md:p-4 lg:text-2xl lg:p-4 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque eveniet porro nisi ex maiores enim voluptatum
                        fuga voluptates saepe illum necessitatibus aliquid.
                    </p>
                </div>

                <div className='flex flex-col items-center justify-center p-2 m-4 gap-2 md:flex md:flex-col md:gap-6 lg:flex lg:flex-col lg:gap-6 '>
                    <h3 className='flex flex-col justify-center items-center font-semibold text-2xl text-gray-600 gap-2 md:flex md:flex-col md:gap-4 lg:text-4xl '>
                        03<span>Contrata</span>
                    </h3>
                    <p className='text-center font-medium text-xl text-gray-800 md:p-4 lg:text-2xl lg:p-4 '>
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
