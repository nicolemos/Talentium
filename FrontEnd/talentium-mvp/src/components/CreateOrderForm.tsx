import { useForm, SubmitHandler } from 'react-hook-form';
import { OrderForm, Estado } from '../interfaces/OrderForm';
import { toast } from 'react-toastify';
import useOrderServices from '../hooks/userOrderServices';

const CreateOrderForm: React.FC = () => {
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
    } = useForm<OrderForm>();

    const { createOrder } = useOrderServices();

    const user: string | null = localStorage.getItem('user');

    const cliente_id = user ? JSON.parse(user) : null;
    console.log('usuarioid', cliente_id.id);

    const onSubmit: SubmitHandler<OrderForm> = async (data) => {
        try {
            // Lógica para enviar los datos del formulario y crear la orden
            const orderData = {
                ...data,
                cliente_id: Number(cliente_id.id),
                estado: 'INICIAL' as Estado,
                profesional: undefined,
                precio: undefined,
            };
            console.log('Orden creada:', orderData);
            if (data) {
                const createdOrder = await createOrder(orderData);

                if (createdOrder) {
                    console.log('Orden creada :', createdOrder);
                    toast.success('Orden creada exitosamente');
                }
            }
        } catch (error) {
            console.error('Error durante la creación de la orden:', error);
            toast.error('Ha ocurrido un error inesperado al crear la orden');
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={`grid h-full w-full grid-cols-2 rounded-lg bg-white/45 p-8 shadow-lg xl:w-3/4 2xl:w-3/5`}
                style={{ gridTemplateRows: '40px auto 40px' }}
            >
                <h2 className='col-span-2 w-full text-center text-xl font-bold'>
                    Crear Orden
                </h2>

                <div className='col-span-2 flex flex-col gap-4 p-4'>
                    <label className='text-sm font-bold'>
                        Descripción:
                        <input
                            {...register('description', {
                                required: 'Por favor ingresa una descripción',
                            })}
                            placeholder='Ingrese una descripción para la orden'
                            className='mt-1 w-full rounded-sm bg-white/80 px-2 py-1 text-base font-normal outline-none'
                        />
                        {errors.description?.message && (
                            <p
                                role='alert'
                                className='mb-1 text-center text-red-500'
                            >
                                {errors.description.message}
                            </p>
                        )}
                    </label>

                    <label className='text-sm font-bold'>
                        Fecha:
                        <input
                            {...register('fecha', {
                                required: 'Por favor ingresa la fecha',
                            })}
                            type='date'
                            placeholder='Ingrese la fecha'
                            className='mt-1 w-full rounded-sm bg-white/80 px-2 py-1 text-base font-normal outline-none'
                        />
                        {errors.fecha?.message && (
                            <p
                                role='alert'
                                className='mb-1 text-center text-red-500'
                            >
                                {errors.fecha.message}
                            </p>
                        )}
                    </label>

                    <label className='text-sm font-bold'>
                        Estado:
                        <div className='mt-1 w-full rounded-sm px-2 py-3 text-base font-normal'>
                            INICIAL
                        </div>
                    </label>

                    <button
                        type='submit'
                        disabled={isSubmitting}
                        className={`mx-auto h-full w-2/4 rounded-md bg-sky-600/90 p-2 text-white shadow-md hover:bg-sky-500/40 hover:text-black`}
                    >
                        {isSubmitting ? 'Creando...' : 'Crear Orden'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateOrderForm;
