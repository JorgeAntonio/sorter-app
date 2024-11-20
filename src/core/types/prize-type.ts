export interface IPrize {
    id: number;
    nombre: string;
    descripcion?: string 
    imagen: string;
}

export type ICreatePrize = Omit<IPrize, 'id'>;

export interface IPrizeFilter {
    nombre?: string;
}