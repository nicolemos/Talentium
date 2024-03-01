import NoAvatar from '/NoAvatar.png';
const OrderCard = () => {
    return (
        <div className='flex h-full w-2/4 max-w-4xl rounded-lg bg-white/45 shadow-xl'>
            <div className=' flex w-1/3 flex-col justify-center gap-4 rounded-md bg-royal-blue-500/75 p-4 text-center'>
                <img
                    src={NoAvatar}
                    alt='Avatar Preview'
                    className='mx-auto h-20 w-20 rounded-full object-fill'
                />
                <div className='text-sm font-semibold text-white'>
                    <p className='text-sm text-black'>Creado por</p>
                    <p className='text-sm font-medium text-white'>Brian L.</p>
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
            <div className='flex w-full flex-col justify-between gap-4 p-4'>
                <h1 className='text-center text-xl font-bold'>
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
                    className={`col-span-2 mt-8 w-full rounded-md bg-royal-blue-500 p-2 text-white shadow-md hover:bg-royal-blue-500/70 hover:text-black sm:mx-auto sm:w-2/4`}
                >
                    Presupuestar
                </button>
            </div>
        </div>
    );
};

export default OrderCard;
