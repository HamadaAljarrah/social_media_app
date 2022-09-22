import dotenv from 'dotenv'
if (process.env.NODE_ENV !== "production") { dotenv.config() }
import express, { json, urlencoded } from 'express';
import cors from 'cors'
import { Server } from './App/Server';
import { AuthRoutes } from './Auth/auth.router';
import { UserRoutes } from './User/user.router';
import { PostRoutes } from './Post/post.router';

const app = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }))

const routes = [
    new AuthRoutes(app),
    new UserRoutes(app),
    new PostRoutes(app),
]


const port = parseInt(process.env.PORT || "8080");

const server = new Server(app, port, routes)

server.listen()