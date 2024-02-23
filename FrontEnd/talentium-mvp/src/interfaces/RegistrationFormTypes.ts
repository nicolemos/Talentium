export interface UserProps {
    id?: string;
    name?: string;
    lastname?: string;
    email?: string;
    password?: string;
    speciality?: Speciality;
}

export interface BasicRegistrationFormProps {
    name?: string;
    lastname?: string;
    email?: string;
    password?: string;
    avatar?: string | null;
    speciality?: Speciality;
    userType?: UserType;
}

export interface RegistrationFormProps extends BasicRegistrationFormProps {
    dni?: string;
    cuit?: string;
    cbu?: string;
    user: UserProps;
    direction?: AddressProps;
}

interface AddressProps {
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
    'Electricista'
];
