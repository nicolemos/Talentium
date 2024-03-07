export interface UserProps {
    id?: number;
    name?: string;
    lastname?: string;
    email?: string;
    dni?: string;
    password?: string;
    speciality?: Speciality;
    direction?: AddressProps;
}

export interface BasicRegistrationFormProps {
    id: string;
    email: string;
    password?: string;
    avatar?: string | null;
}

export interface RegistrationFormProps extends BasicRegistrationFormProps {
    name?: string;
    lastname?: string;
    dni?: string;
    cuit?: string;
    cbu?: string;
    user: UserProps;
    userType?: UserType;
    speciality?: Speciality;
    direction?: AddressProps;
}

export interface AddressProps {
    street: string;
    number: string;
    province: string;
    location: string;
}

export interface UserTypeSelectorProps {
    onSelectedUserType: (userType: UserType) => void;
}

export enum UserType {
    Client = 'Cliente',
    Professional = 'Profesional',
}
type Speciality = [
    'Abogado',
    'Plomero',
    'Ingeniero',
    'Jardinero',
    'Electricista',
];
