import Button from "./Button";


const ComponenteReact = () => {
    return (
        <article className="text-center mx-auto max-w-5xl mt-32">
          <h2 className="font-bold text-5xl mb-7">¿Cómo es el proceso?</h2>

          <div className="flex">

            <div className="p-5">
              <h3 className="text-3xl mb-4 font-semibold">01 <br /> Registro</h3>
              <p className="text-start font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet porro nisi ex maiores enim voluptatum fuga voluptates saepe illum necessitatibus aliquid.</p>
            </div>

            <div className="p-5">
              <h3 className="text-3xl mb-4 font-semibold">02 <br /> Busqueda</h3>
              <p className="text-start font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet porro nisi ex maiores enim voluptatum fuga voluptates saepe illum necessitatibus aliquid.</p>
            </div>

            <div className="p-5">
              <h3 className="text-3xl mb-4 font-semibold">03 <br /> Contacta</h3>
              <p className="text-start font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet porro nisi ex maiores enim voluptatum fuga voluptates saepe illum necessitatibus aliquid.</p>
            </div>

          </div>
          <div className="flex justify-center gap-x-32 mt-16">

            <div>
              
              <h2 className="text-xl font-extrabold">CONTRATA SERVICIO</h2>
              
              <div className=" bg-gradient-to-b from-white/60 to-white/50 h-44 w-64 mt-5 rounded-md">
                <h4 className=" font-light">contrata servicio</h4>
                <p className=" font-normal text-start p-3 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quidem officia fugit enim numquam,</p>
                <Button href="/Register" content="Registro"/>
              </div>
            </div>

            <div>

              <h2 className="text-xl font-extrabold">OFRECE SERVICIO</h2>

              <div className="flex-col  bg-gradient-to-b from-white/60 to-white/50 h-44 w-64 mt-5 rounded-md">
                <h4 className=" font-light">contrata servicio</h4>
                <p className=" font-normal text-start p-3 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quidem officia fugit enim numquam,</p>
                <Button href="/Register"  content="Registro"/>
              </div>

            </div>
          </div>
        </article>
    );
  };
  
  export default ComponenteReact;