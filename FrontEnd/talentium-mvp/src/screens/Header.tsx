import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../components/CustomLink';

const Header: React.FC = () => {

    return (
        <header className="text-white body-font flex flex-row items-center justify-between">
            <div className="pl-5 pt-2">
                <Link to="/">
                    <img src="/Logo2.png" alt="" className="w-36 h-auto" />
                </Link>
            </div>

            <div className="">
                <nav className="">
                    <CustomLink to="" content="Cliente" />
                    <CustomLink to="" content="Profesional" />
                </nav>
            </div>

            <div className="pr-3 flex gap-2">
                <>
                    <CustomLink to="/Login" content="Ingresar" />
                    <CustomLink to="/Register" content="Registrate" />
                </>
            </div>
        </header>
    );
};

export default Header;
