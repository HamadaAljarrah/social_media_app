export type Register = {
    name: string,
    email: string,
    password: string,

}
export type Login = Omit<Register, 'name'>

export type IUser = {
    name: string,
    email: string,
    friends: Array<string>,
    _id: string;
}

export type ServerResponse<T> = {
    status: number,
    success: boolean,
    message: string,
    data?: T
}