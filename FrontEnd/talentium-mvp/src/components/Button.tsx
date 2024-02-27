import React, { ReactNode } from 'react';

interface ButtonProps {
    children?: ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    customClass?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
    children,
    onClick,
    customClass,
}) => {
    return (
        <button
            type='submit'
            className={`flex items-center rounded-md text-white transition-colors hover:bg-royal-blue-700 ${customClass}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CustomButton;
