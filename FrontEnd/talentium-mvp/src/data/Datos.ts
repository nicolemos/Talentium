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

export class Datos {
    static cliente(): Cliente {
        return {
            clienteId: 1,
            name: "Juan40",
            lastname: "perez",
            dni: "77234567",
            rating: 1,
            user: {
                id: 48,
                email: "email25@emails47.com",
                avatar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png",
            },
            direction: {
                street: "calle 1",
                number: "258",
                province: "chaco",
                location: "montaña",
            },
        };
    }

    static profesional(): Profesional {
        return {
            id: 10,
            name: "Puan",
            lastname: "perez",
            cuit: "20-77234567-0",
            cbu: "20772345670",
            rating: 5,
            profession: "ELECTRICIAN",
            direction: {
                street: "calle falsa",
                number: "123",
                province: "chaco",
                location: "lago",
            },
            user: {
                id: 133,
                email: "emai555@emails.com",
                avatar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png",
            },
        };
    }
}


