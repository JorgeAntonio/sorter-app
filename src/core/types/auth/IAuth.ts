export interface ILogin {
    username: string
    password: string
}

export interface IRegister {
    username: string,
    password: string,
    password2: string,
    email: string,
    first_name: string,
    last_name: string,
}

export interface IToken {
    access: string,
    refresh: string,
    custom_message: string,
}

export interface IRefreshToken {
    refresh: string,
}

export interface IUser {
    username:   string;
    email:      string;
    first_name: string;
    last_name:  string;
}