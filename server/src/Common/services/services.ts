import { Response } from "express"
import { ServerResponse } from "../types"

export const sendResponse = (res: Response, data: ServerResponse<any>): void => {
    res.status(data.status)
        .json(
            {
                success: data.success,
                message: data.message,
                data: data.data
            }
        )
}