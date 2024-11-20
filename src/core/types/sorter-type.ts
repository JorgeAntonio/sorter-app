export interface ISorter {
    id: number;
    limiteTickets: number;
    nombre: string;
    nombrePublico: string;
    descripcion: string;
    imagen: string;
    precioTickets: number;
    fechaSorteo: string;
    usuario: number;
}

export type ICreateSorter = Omit<ISorter, 'id'>;

export interface ISorterFilter {
    nombre?: string;
    nombrePublico?: string;
    usuario?: number;
    precioTickets?: number;
    fechaSorteo_after?: string;
    fechaSorteo_before?: string;
    precioTickets_min?: number;
    precioTickets_max?: number;
}