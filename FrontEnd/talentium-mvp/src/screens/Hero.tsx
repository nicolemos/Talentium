const Hero: React.FC = () => {
    return (
        <section className='flex flex-col items-center gap-4 p-4 md:m-4 md:flex md:flex-col md:gap-8 md:p-8 lg:flex lg:flex-row lg:items-center lg:justify-center '>
            <div className='mb-4 py-2 md:flex md:flex-col md:gap-6 '>
                <h1 className='text-3xl font-bold text-gray-300 lg:text-6xl '>
                    La plataforma donde el talento vale.
                    <br />
                    Descubre, contrata y ofrece tus servicios.
                </h1>
                <p className='gap-4 py-4 text-xl font-semibold text-gray-200 lg:text-2xl'>
                    ¡Bienvenidos a talentium! Tu puente hacia la excelencia
                    operativa.
                    <br className='inline-block' />
                    Descubre una gama completa de contratos y servicios. Con
                    nosotros, encontrarás soluciones a medida, innovación
                    constante y un compromiso inquebrantable con la calidad.
                    <br className='inline-block' />
                    Sumérgete en la experiencia de Talentium y consigue la
                    solucion a ese problema.
                    <br className='inline-block' />
                    ¡Explora, innova y crece con nosotros!
                </p>
            </div>

            <div className='h-auto w-full md:mb-4 md:flex md:flex-col md:p-4 '>
                <img
                    className='mb-4 -skew-x-6 p-4'
                    alt='hero'
                    src='/Banner.jpg'
                />
            </div>
        </section>
    );
};

export default Hero;
