import { Application } from "express";
import { RouteConfig } from "../Common/RouteConfig";
import UserController from './user.controller'

class UserRoutes extends RouteConfig {
    constructor(app: Application) {
        super(app, "UserRoutes")
    }
    routerConfig(): Application {
        this.app.route('/users/:userId').get([UserController.readUser])
        this.app.route('/users/:userId').put([UserController.updateUser])
        this.app.route('/users/:userId').delete([UserController.deleteUser])
        this.app.route('/users').post([UserController.createUser])
        this.app.route('/users').get([UserController.getAllUsers])
        return this.app
    }
}

export { UserRoutes }