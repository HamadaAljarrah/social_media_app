import { Response } from "express";
import Service from "../Common/services/services";
import { UserReq } from "./user.interface";
import UserServer from "./user.service";


class UserController {
    async readUser(req: UserReq, res: Response) {
        const user = await UserServer.findUserById(req.params.userId)
        Service.sendResponse(res, user)
    }

    async getAllUsers(req: UserReq, res: Response) {
        const users = await UserServer.getUsers();
        Service.sendResponse(res, users)
    }

    async getCurrentUser(req: UserReq, res: Response) {
        const user = UserServer.checkCurrentUser(req);
        Service.sendResponse(res, user);
    }

    async createUser(req: UserReq, res: Response) {
        const processResult = await UserServer.processUserCreation(req.body);
        if (!processResult.success)
            return Service.sendResponse(res, processResult)
        const user = await UserServer.createNewUser(req.body);
        Service.sendResponse(res, user)
    }

    async updateUser(req: UserReq, res: Response) {
        const respose = await UserServer.updateUser(req.user?._id, req.body)
        Service.sendResponse(res, respose);
     }
    async deleteUser(req: UserReq, res: Response) { }


}


export default new UserController;