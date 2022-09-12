import { Application } from "express";


abstract class RouteConfig {
    public app: Application;
    private name: string;
    constructor(app: Application, name: string) {
        this.app = app;
        this.name = name;
    }
    public getName() {
        return this.name;
    }
    abstract routerConfig(): Application;
}

export { RouteConfig }