import { Application } from "express";
import { RouteConfig } from "../Common/RouteConfig";
import PostController from './post.controller'


class PostRoutes extends RouteConfig {
    constructor(app: Application) {
        super(app, "PostRoutes")
    }
    routerConfig(): Application {

        this.app.route('/upload').post([ PostController.uploadFile])

        return this.app
    }
}

export { PostRoutes }