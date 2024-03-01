import React from 'react';
import { ButtonProps } from '../interfaces/ButtonProps';

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
