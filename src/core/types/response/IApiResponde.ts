export interface IApiResponse<T> {
    message: string;
    data:    T[]
}

export interface IApiRegisterResponse<T> {
    message: string;
    user:    T[]
}

