export interface Cliente {
    clienteId: number;
    name: string;
    lastname: string;
    dni: string;
    rating: number;
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

export interface Profesional {
    id: number;
    name: string;
    lastname: string;
    cuit: string;
    cbu: string;
    rating: number;
    profession: string;
    direction: {
        street: string;
        number: string;
        province: string;
        location: string;
    };
    user: {
        id: number;
        email: string;
        avatar: string;
    };
}

export interface OrdenDto {
    id: number;
    description: string;
    profesional: number;
    precio: number;
    fecha: string;
    comentarios: string;
    orderstatus: string;
    cliente_id: number;
}

export interface ProfesionalDto {
    id: number;
    name: string;
    lastname: string;
    cuit: string;
    cbu: string;
    rating: number;
    profession: string;
    wallet: number;
}

export class Datos {
    static cliente(): Cliente {
        return {
            clienteId: 1,
            name: 'Juan40',
            lastname: 'perez',
            dni: '77234567',
            rating: 1,
            user: {
                id: 48,
                email: 'email25@emails47.com',
                avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png',
            },
            direction: {
                street: 'calle 1',
                number: '258',
                province: 'chaco',
                location: 'montaña',
            },
        };
    }

    static profesional(): Profesional {
        return {
            id: 10,
            name: 'Puan',
            lastname: 'perez',
            cuit: '20-77234567-0',
            cbu: '20772345670',
            rating: 5,
            profession: 'ELECTRICIAN',
            direction: {
                street: 'calle falsa',
                number: '123',
                province: 'chaco',
                location: 'lago',
            },
            user: {
                id: 133,
                email: 'emai555@emails.com',
                avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png',
            },
        };
    }

    static orden(): OrdenDto {
        // Aquí ajustas para devolver un objeto que coincida con la interfaz OrdenDto corregida
        return {
            id: 1,
            description: 'nueva orden 5 para realizar muchas cosas empezando por camiar, una canilla y luego revisar el lavarropas',
            profesional: 10,
            precio: 20.0,
            fecha: '5/03/2024',
            comentarios: 'arreglo con materiales incluidos',
            orderstatus: 'APROBADA',
            cliente_id: 15,
        };
    }
}
