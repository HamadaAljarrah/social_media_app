import { NextFunction, Response } from "express"
import { UserReq } from "../../User/user.interface"
import jwt from "jsonwebtoken"

const secret = process.env.ACCESS_TOKEN || "123"
class JWT {

    checkIfAuthenticated(req: UserReq, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader != null) {

            const token = authHeader.split(" ")[1];
            jwt.verify(token, secret, (err: any, decoded: any) => {
                if (err) {
                    return res.status(403).json({
                        success: false,
                        message: "Token Expired"
                    })
                }
                req.user = decoded.user;
                next()
            })

        } else {
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        }
    }
}

export default new JWT