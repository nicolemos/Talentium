import {
    RiListUnordered,
    RiMessage3Line,
    RiProfileLine,
    RiWalletLine,
} from 'react-icons/ri';
import NoAvatar from '/NoAvatar.png?url';

const DashboardCliente = () => {
    return (
        <section className="grid grid-cols-6 min-w-full h-screen">
            <div className="col-span-1 bg-royal-blue-500 flex flex-col items-center justify-center">
                <div>
                    <img
                        src="/Logo1.png"
                        alt="Talentium"
                        className="w-48 h-auto"
                    />
                </div>
                <div>
                    <img
                        src={NoAvatar}
                        alt="Talentium"
                        className="w-20 h-20"
                    />
                </div>
                <h2 className="text-white text-xl font-bold p-2">Usuario</h2>
                <div className="col-span-1 bg-royal-blue-800 flex flex-col items-center w-full h-full rounded-tr-3xl">
                    <ul className="text-white p-2 h-full">
                        <li className="p-2 flex flex-row items-center">
                            <RiProfileLine />
                            <a href="" className="p-2">
                                Datos
                            </a>
                        </li>
                        <li className="p-2 flex flex-row items-center">
                            <RiListUnordered />
                            <a href="" className="p-2">
                                Ordenes
                            </a>
                        </li>
                        <li className="p-2 flex flex-row items-center">
                            <RiWalletLine />
                            <a href="" className="p-2">
                                Billetera
                            </a>
                        </li>
                        <li className="p-2 flex flex-row items-center">
                            <RiMessage3Line />
                            <a href="" className="p-2">
                                Soporte
                            </a>
                        </li>
                    </ul>
                    <button className="text-white p-10">Cerrar sesión</button>
                </div>
            </div>
            <div className="col-span-5 bg-royal-blue-300 text-center">Nombre de pestaña activa</div>
        </section>
    );
};

export default DashboardCliente;
