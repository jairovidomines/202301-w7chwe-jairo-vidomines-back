import chalk from "chalk";
import createDebug from "debug";
import { app } from "./app.js";

const debug = createDebug("users");

export const startServer = async (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(
        chalk.bgGreenBright(
          chalk.black(`Server listening on http://localhost:${port}`)
        )
      );
      resolve(server);
    });
  });
