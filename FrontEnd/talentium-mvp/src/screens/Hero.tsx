const Hero: React.FC = () => {
  return (
    <section className="  text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-950">
            La plataforma donde el talento vale
            <br className="hidden lg:inline-block" />
            Descubre, contrata y ofrece tus servicios.
          </h1>
          <p className="mb-8 leading-relaxed text-gray-900">
            ¡Bienvenidos a talentium! Tu puente hacia la excelencia operativa. 
            <br className="hidden lg:inline-block" />
            Descubre una gama completa de contratos y servicios. Con
            nosotros, encontrarás soluciones a medida, innovación constante y un
            compromiso inquebrantable con la calidad.
            <br className="hidden lg:inline-block" />
            Sumérgete en la experiencia de Talentium y consigue la solucion a ese problema.
            <br className="hidden lg:inline-block" />
            ¡Explora, innova y crece con nosotros!
          </p>
        </div>

        <div className="w-full md:w-1/2 h-full">
          <img
            className="object-cover object-center -skew-x-6 rounded-lg"
            alt="hero"
            src="/Banner.jpg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
