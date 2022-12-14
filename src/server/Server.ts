import express from "express";
import "dotenv/config";

import "./shared/services/TranslateYup";
import { router } from "./routes";

const server = express();

//configs do servidor
server.use(express.json());

server.use(router);

export { server };
