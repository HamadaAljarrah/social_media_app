import { ServerResponse } from "../Common/types";
import { IUser } from "../User/user.interface";
import User from "../User/user.model";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


class AuthService {

    async validateLogin(email: string, password: string): Promise<ServerResponse<IUser>> {
        const user = await User.findOne({ email })
        if (user == null)
            return {
                status: 404,
                success: false,
                message: 'User was not found',
            }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return {
                status: 403,
                success: false,
                message: 'Wrong password',
            }

        return {
            status: 200,
            success: true,
            message: 'User is found',
            data: user
        }

    }



    createAccessToken(payload: object, exp: number) {
        const secret = process.env.ACCESS_TOKEN || "123"
        const token = jwt.sign(payload, secret, { expiresIn: exp })
        return token
    }
}

export default new AuthService;

