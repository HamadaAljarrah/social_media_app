import { Request, Response } from "express";
import Service from "../Common/services/services";
import { UserReq } from "../User/user.interface";
import AuthService from "./auth.service";

class AuthController {
    async login(req: UserReq, res: Response) {
        const { email, password } = req.body
        const result = await AuthService.validateLogin(email, password);
        if (!result.success)
            return Service.sendResponse(res, result);

        const payload = { user: result.data }
        const oneHour = 1000 * 60 * 60;

        const token = AuthService.createAccessToken(payload, oneHour)
        const response = {
            ...result,
            data: {
                user: result.data,
                token: token
            }
        }
        Service.sendResponse(res, response)
    }

    async logout(req: Request, res: Response) {

    }

}

export default new AuthController;