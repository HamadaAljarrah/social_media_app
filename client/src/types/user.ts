

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