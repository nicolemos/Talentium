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
            className={`flex items-center gap-4 rounded-md px-2 py-1 transition-colors hover:bg-royal-blue-700`}
        >
            {children}
            {content}
        </Link>
    );
};

export default CustomLink;
