export interface IUser {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
}

export type ICreateUser = Omit<IUser, 'id'> & { password: string };