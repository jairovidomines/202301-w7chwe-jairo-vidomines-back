import "./loadEnvironment.js";
import { startServer } from "./server/startServer.js";

const port = process.env.PORT ?? 8001;

await startServer(+port);
