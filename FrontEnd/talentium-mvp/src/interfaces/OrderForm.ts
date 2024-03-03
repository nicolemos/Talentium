export interface OrderForm {
  description: string
  profesional?: number
  precio?: string
  fecha: string
  estado: Estado
  cliente_id: number
}

export type Estado =  "INICIAL" |  "ACEPTADA" | "RECHAZADA"
