import { ServerResponse } from "../Common/types";
import { IUser } from "../User/user.interface";
import User from "../User/user.model";
import jwt from "jsonwebtoken"



export const findUserByEmail = async (email: string): Promise<ServerResponse<IUser>> => {
    const user = await User.findOne({ email })
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

export const createAccessToken = (payload: object, exp: number) => {
    const secret = process.env.ACCESS_TOKEN || "123"
    return jwt.sign(payload, secret, { expiresIn: exp })
}

