export interface IPrizeSorter {
    id: number;
    objeto: number;
    sorteo: number;
}

export type ICreatePrizeSorter = Omit<IPrizeSorter, 'id'>;