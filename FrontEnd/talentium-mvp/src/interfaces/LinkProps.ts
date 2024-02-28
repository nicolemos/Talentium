import { ReactNode } from 'react';

export interface LinkProps {
    to: string;
    content?: string;
    children?: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
