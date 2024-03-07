import { AddressProps } from './RegistrationFormTypes';

export interface User {
    id?:number;
    name?: string;
    email?: string;
    photoUrl?: string;
}

export interface PerfilProps {
    userId: number;
}

export interface UserData {
    id?:number,
    name: string;
    lastname: string;
    dni: string;
    email: string;
    direction: AddressProps;
}
