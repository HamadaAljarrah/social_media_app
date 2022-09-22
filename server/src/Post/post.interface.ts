import { Request } from "express";
import { UserDocument } from "./user.model";

export interface IUser {
    name: UserDocument['name'],
    email: UserDocument['email'],
    password: UserDocument['password'],
    friends: UserDocument['friends']
    _id: UserDocument['_id'],

}
type Params = UserDocument['_id']

export interface UserReq extends Request<Params, {}, IUser> {
    user?: IUser
}

