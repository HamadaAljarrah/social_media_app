import mongoose from "mongoose"

export type ServerResponse<T> = {
    status: number,
    success: boolean,
    message: string,
    data?: T
}

export type MongoId = mongoose.Types.ObjectId;