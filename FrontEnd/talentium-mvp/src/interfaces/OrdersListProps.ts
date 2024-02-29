import { ReactNode } from "react";

export interface Order {
    id: number;
    descripcion: string;
    professional: number;
    precio: string;
    comentarios: string;
    orderstatus: string;
}

export interface Professional {
    id: number;
    // Otras propiedades del profesional
}

export interface OrderData {
    id: number;
    orderstatus: ReactNode;
    comentarios?: string;
    descripcion: string;
}

export interface OrdersListProfProps {
    orders: OrderData[];
} 