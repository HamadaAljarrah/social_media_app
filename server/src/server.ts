import dotenv from 'dotenv'
if (process.env.NODE_ENV !== "production") { dotenv.config() }
import express, { json, urlencoded } from 'express';
import { Server } from './App/Server';
import { AuthRoutes } from './Auth/auth.router';
import { UserRoutes } from './User/user.router';

const app = express();
app.use(json())
app.use(urlencoded({ extended: false }))

const routes = [
    new AuthRoutes(app),
    new UserRoutes(app),
]
const port = parseInt(process.env.PORT || "8080");

const server = new Server(app, port, routes)

server.listen()