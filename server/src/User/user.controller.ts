import { Response } from "express";
import { sendResponse } from "../Common/services/services";
import { UserReq } from "./user.interface";
import { checkCurrentUser, createNewUser, findUserById, getUsers, processUserCreation } from "./user.service";


class UserController {
    async readUser(req: UserReq, res: Response) {
        const user = await findUserById(req.params.userId)
        sendResponse(res, user)
    }

    async getAllUsers(req: UserReq, res: Response) {
        const users = await getUsers();
        sendResponse(res, users)
    }

    async getCurrentUser(req: UserReq, res: Response) {
        const user = checkCurrentUser(req);
        sendResponse(res, user);
    }

    async createUser(req: UserReq, res: Response) {
        const processResult = await processUserCreation(req.body);
        if (!processResult.success)
            return sendResponse(res, processResult)
        const user = await createNewUser(req.body);
        sendResponse(res, user)
    }

    async updateUser(req: UserReq, res: Response) { }
    async deleteUser(req: UserReq, res: Response) { }


}


export default new UserController;