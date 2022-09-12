import { Application } from "express";
import { RouteConfig } from "../Common/RouteConfig";
import AuthController from "./auth.controller"

class AuthRoutes extends RouteConfig {
    constructor(app: Application) {
        super(app, 'AuthRoutes')
    }

    public routerConfig(): Application {
        this.app.route("/auth/login").post([AuthController.login])
        this.app.route("/auth/logout").post([AuthController.logout])
        return this.app
    }
}

export { AuthRoutes }