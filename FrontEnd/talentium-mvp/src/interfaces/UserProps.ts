import { AddressProps } from './RegistrationFormTypes';

export interface User {
    name?: string;
    email?: string;
    photoUrl?: string;
}

export interface PerfilProps {
    userId: number;
}

export interface UserData {
    name: string;
    lastname: string;
    dni: string;
    email: string;
    direction: AddressProps;
}
