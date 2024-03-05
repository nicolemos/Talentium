import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../components/CustomLink';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import InfoCardProf from '../components/InfoCardProf';
import InfoCardClient from '../components/InfoCardClient';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isClientVisible, setIsClientVisible] = useState(false);
    const closeClient = () => setIsClientVisible(false);

    const [isProfVisible, setIsProfVisible] = useState(false);
    const closeModalProf = () => setIsProfVisible(false);

    // Datos del modal
    const InfoCardClientContent = {
        title: 'Como Cliente puedes...',
        content:
            'Contratar los servicios del profesional que necesites, tan fácil como:',
        listItems: [
            'Hacer la oferta de trabajo.',
            'El profesional acepta la propuesta.',
            'Coordinan la reunión.',
            'Se realiza el trabajo.',
            'Y listo...',
        ],
    };

    const InfoCardProfContent = {
        title: 'Como Profesional puedes...',
        content:
            'Además de contratar los servicios de un profesional que necesites, tambien puedes ofrecer los servicios en los que te especializas tan fácil como:',
        listItems: [
            'Actualizar tu perfil como Profesional.',
            'Ver ordenes de trabajo, aceptarlas y  ofrecer tus servicios.',
            'Coordinan la reunión.',
            'Realizar el trabajo en el tiempo acordado.',
            'Y listo...',
        ],
    };

    return (
        <header className='bg-transparent p-2 '>
            <nav className='grid grid-cols-3 items-center justify-between text-white md:grid md:grid-cols-2 md:content-center md:items-center md:justify-items-end md:gap-4 md:space-x-8 md:p-4 lg:grid lg:grid-cols-3'>
                <div className='col-span-2 h-auto w-60 md:col-span-1 md:grid md:w-44 md:justify-self-start'>
                    <Link to='/'>
                        <img src='/Logo2.png' alt='Logo' className='' />
                    </Link>
                </div>
                <div
                    className='col-span-1 justify-self-end lg:hidden'
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <RiCloseLine className='m-2 h-auto w-12 p-2' />
                    ) : (
                        <RiMenuLine className='m-2 h-auto w-12 p-2' />
                    )}
                </div>

                <div className='hidden md:hidden lg:grid lg:grid-cols-2 lg:justify-items-center lg:justify-self-center '>
                    <CustomLink
                        to='#'
                        content='Cliente'
                        onClick={() => setIsClientVisible(true)}
                    />
                    {isClientVisible && (
                        <InfoCardClient
                            title={InfoCardClientContent.title}
                            content={InfoCardClientContent.content}
                            listItems={InfoCardClientContent.listItems}
                            onClose={closeClient}
                        />
                    )}
                    <CustomLink
                        to='#'
                        content='Profesional'
                        onClick={() => setIsProfVisible(true)}
                    />
                    {isProfVisible && (
                        <InfoCardProf
                            title={InfoCardProfContent.title}
                            content={InfoCardProfContent.content}
                            listItems={InfoCardProfContent.listItems}
                            onClose={closeModalProf}
                        />
                    )}
                </div>

                <div
                    className={`${isMenuOpen ? 'grid' : 'hidden'} col-span-3 grid-cols-2 justify-items-center gap-4 p-4 lg:col-span-1 lg:grid lg:justify-items-center`}
                >
                    <div className='col-span-3 grid grid-cols-2 content-center justify-items-center '>
                        <CustomLink to='/Login' content='Ingresar' />
                        <CustomLink to='/Register' content='Registrate' />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
