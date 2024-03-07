import React from 'react';
import { Link } from 'react-router-dom';
import { LinkProps } from '../interfaces/LinkProps';

const CustomLink: React.FC<LinkProps> = ({
    to,
    content,
    children,
    onClick,
    customClass,
}) => {
    return (
        <Link
            to={to}
            className={`flex items-center gap-4 rounded-md px-2 py-1 transition-colors hover:bg-royal-blue-700 ${customClass}`}
            onClick={onClick}
        >
            {children}
            {content}
        </Link>
    );
};

export default CustomLink;
