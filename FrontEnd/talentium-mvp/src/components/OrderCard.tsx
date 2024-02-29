import NoAvatar from '/NoAvatar.png';
const OrderCard = () => {
    return (
        <div className='bg-white/45 w-2/4 max-w-4xl rounded-lg h-full flex shadow-xl'>
            <div className=' bg-royal-blue-500/75 p-4 rounded-md flex flex-col gap-4 justify-center text-center w-1/3'>
                <img
                    src={NoAvatar}
                    alt='Avatar Preview'
                    className='rounded-full object-fill w-20 h-20 mx-auto'
                />
                <div className='text-sm font-semibold text-white'>
                    <p className='text-sm text-black'>Creado por</p>
                    <p className='text-sm text-white font-medium'>Brian L.</p>
                </div>
                <div className='text-sm font-semibold text-white'>
                    <p className='text-sm text-black'>Fecha de publicación</p>
                    <p className='text-sm font-medium'>21/02/2024</p>
                </div>
                <div className='text-sm font-semibold text-white'>
                    <p className='text-sm text-black'>Profesional</p>
                    <p className='text-sm font-medium'>Plomero</p>
                </div>
                <div className='text-sm font-semibold text-white'>
                    <p className='text-sm text-black'>Localidad</p>
                    <p className='text-sm font-medium'>Muñiz, Buenos Aires</p>
                </div>
            </div>
            <div className='p-4 flex flex-col justify-between w-full gap-4'>
                <h1 className='text-center font-bold text-xl'>
                    Reparación de cañería baño 20m2 aprox.
                </h1>
                <h2 className='text-left font-semibold'>
                    Descripción de tarea a realizar:
                </h2>
                <p className='px-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque, sunt dicta, veritatis tenetur commodi necessitatibus
                    saepe magnam eius sed, rem unde corrupti autem rerum dolorum
                    deserunt quod quos nobis vel! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Temporibus quos perferendis
                    sequi possimus minima non recusandae tempore quod, facilis
                    maxime eius, doloribus officia saepe expedita libero odit
                    consectetur ut neque?
                </p>
                <button
                    type='submit'
                    className={`bg-royal-blue-500 text-white hover:text-black hover:bg-royal-blue-500/70 shadow-md p-2 rounded-md w-full mt-8 col-span-2 sm:w-2/4 sm:mx-auto`}
                >
                    Presupuestar
                </button>
            </div>
        </div>
    );
};

export default OrderCard;
