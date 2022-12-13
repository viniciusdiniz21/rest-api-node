import express from "express";
import { router } from "./routes";

const server = express();

//configs do servidor
server.use(router);

export { server };
