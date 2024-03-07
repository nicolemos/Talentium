export interface UserProps {
    id?: number;
    name?: string;
    lastname?: string;
    email?: string;
    dni?: string;
    user?:BasicRegistrationFormProps;
    password?: string;
    speciality?: Speciality;
    direction?: AddressProps;
}

export interface BasicRegistrationFormProps {
    id?:number,
    email?: string;
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
    Client = 'client',
    Professional = 'professional',
}
type Speciality = [
    'Abogado',
    'Plomero',
    'Ingeniero',
    'Jardinero',
    'Electricista',
];
