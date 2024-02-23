import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface MyLinkProps {
    to: string;
    content: string;
    children?: ReactNode;
}

const CustomLink: React.FC<MyLinkProps> = ({ to, content, children }) => {
    return (
        <Link
            to={to}
            className={`flex items-center gap-4 py-1 px-2 hover:bg-royal-blue-700 rounded-md transition-colors`}
        >
            {children}
            {content}
        </Link>
    );
};

export default CustomLink;
