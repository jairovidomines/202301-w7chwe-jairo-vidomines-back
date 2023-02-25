import createDebug from "debug";
import { app } from "./app.js";

const debug = createDebug("users:startServer");

export const startServer = async (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server listening on http://localhost:${port}`);
      resolve(server);
    });
  });
