import { ReactNode } from 'react';

export interface ButtonProps {
    children?: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    customClass?: string;
    disabled?: boolean;
}
