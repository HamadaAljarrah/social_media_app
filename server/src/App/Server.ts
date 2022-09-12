import { Application } from "express";
import { RouteConfig } from "../Common/RouteConfig";



class Server {
    app: Application;
    routes: Array<RouteConfig>;
    port: number;
    name: string;

    constructor(app: Application, port: number, routes: Array<RouteConfig>, name?: string) {
        this.app = app;
        this.name = name || 'This server has no name';
        this.port = port;
        this.routes = routes
        this.initRoutes();
    }

    initRoutes() {
        this.routes.forEach(route => {
            route.routerConfig();
            console.log(`${route.getName()} has successfully been initialized`);

        })
    }
    getName() {
        return this.name;
    }
    listen() {
        this.app.listen(this.port, () => console.log("Listning to port: *" + this.port))
    }
}

export { Server }