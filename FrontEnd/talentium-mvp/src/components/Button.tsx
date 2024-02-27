import React, { ReactNode } from 'react';

interface ButtonProps {    children?: ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    customClass?: string;
}

const CustomButton: React.FC<ButtonProps> = ({ children, onClick, customClass }) => {
    return (
        <button
            type='submit'
            className={`text-white flex items-center hover:bg-royal-blue-700 rounded-md transition-colors ${customClass}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CustomButton;
