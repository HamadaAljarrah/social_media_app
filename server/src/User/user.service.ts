import { IUser, UserReq } from "./user.interface";
import User from "./user.model";
import { ServerResponse } from '../Common/types'




export const createNewUser = async (data: IUser): Promise<ServerResponse<IUser>> => {
    try {
        const user = await User.create(data)
        return {
            status: 200,
            success: true,
            message: 'User was created',
            data: user
        }
    } catch (error) {
        return {
            status: 400,
            success: false,
            message: 'Error: ' + error,
        }
    }

}

export const processUserCreation = async (data: IUser): Promise<ServerResponse<IUser>> => {

    if (await User.findOne({ email: data.email }) != null)
        return {
            status: 400,
            success: false,
            message: 'User with email already exist',
        }

    if (data.name.length < 3)
        return {
            status: 400,
            success: false,
            message: 'name must be longer than 2 characters',
        }

    if (!data.email.includes('@'))
        return {
            status: 400,
            success: false,
            message: 'Enter a valid email',
        }

    if (data.password.length < 6)
        return {
            status: 400,
            success: false,
            message: 'Password must be longer than 6 characters',
        }

    return {
        status: 200,
        success: true,
        message: 'Valid input',
    }
}

export const getUsers = async (): Promise<ServerResponse<IUser[]>> => {
    const users = await User.find();

    if (users == null)
        return {
            status: 404,
            success: false,
            message: 'No users',
        }

    return {
        status: 200,
        success: true,
        message: 'Users list was found',
        data: users
    }
}

export const checkCurrentUser = (req: UserReq): ServerResponse<IUser> => {
    const user = req.user
    if (user == null)
        return {
            status: 404,
            success: false,
            message: 'No user',
        }

    return {
        status: 200,
        success: true,
        message: 'User was found',
        data: user
    }
}

export const findUserById = async (_id: string): Promise<ServerResponse<IUser>> => {
    const user = await User.findById(_id);
    if (user == null)
        return {
            status: 404,
            success: false,
            message: 'User was not found',
        }

    return {
        status: 200,
        success: true,
        message: 'User is found',
        data: user
    }
}