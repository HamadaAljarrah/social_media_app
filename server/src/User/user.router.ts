import { Application } from "express";
import { RouteConfig } from "../Common/RouteConfig";
import UserController from './user.controller'
import JWT from "../Common/middlewares/jwt"
class UserRoutes extends RouteConfig {
    constructor(app: Application) {
        super(app, "UserRoutes")
    }
    routerConfig(): Application {
        this.app.route('/users/:userId').get([UserController.readUser])
        this.app.route('/users/:userId').delete([UserController.deleteUser])
        this.app.route('/users').put([JWT.checkIfAuthenticated,UserController.updateUser])
        this.app.route('/users').post([UserController.createUser])
        this.app.route('/users').get([UserController.getAllUsers])
        this.app.route('/user').get([JWT.checkIfAuthenticated, UserController.getCurrentUser])

        return this.app
    }
}

export { UserRoutes }