import "./loadEnvironment.js";
import connectDatabase from "./database/connectDatabase.js";
import { startServer } from "./server/startServer.js";
import { app } from "./server/app.js";

export const port = process.env.PORT ?? 3001;
const mongoUrl = process.env.MONGODB_CONNECTION_URL!;

await connectDatabase(mongoUrl);
await startServer(+port);
