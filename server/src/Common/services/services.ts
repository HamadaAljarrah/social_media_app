import { Response } from "express"
import { ServerResponse } from "../types"


class Service {
    public sendResponse (res: Response, data: ServerResponse<any>): void {
        res.status(data.status)
            .json(
                {
                    success: data.success,
                    message: data.message,
                    data: data.data
                }
            )
    }
}

export default new Service
