export interface ITicket {
    id: number;
    ganador: boolean;
    nombreComprador: string;
    correo: number;
    celular: string;
    estado: string;
    fechaVenta: string;
    sorteo: number;
}

export type ICreateTicket = Omit<ITicket, 'id'>;

export interface ITicketFilter {
    sorteo?: number;
    ganador?: boolean;
    nombreComprador?: string;
    correo?: string;
    estado?: string;
    fechaVenta_after?: string;
    fechaVenta_before?: string;
}