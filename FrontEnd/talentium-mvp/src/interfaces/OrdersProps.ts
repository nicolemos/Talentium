
export interface Client {
    clienteId: number;
    name: string;
    lastname: string;
    dni: string;
    rating: number;
    cuit?: number;
    cbu?: number;
    profession?: string;
    user: {
        id: number;
        email: string;
        avatar: string;
    };
    direction: {
        street: string;
        number: string;
        province: string;
        location: string;
    };
}

export interface Order {
    description: string;
    cliente_id: number;
    proffesional?: number;
    price?: number;
    date?: string;
    state?: string;
}

export interface CreateOrdersProps {
    cliente: Client;
}
