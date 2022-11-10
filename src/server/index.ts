import "../loadEnvironments.js";
import chalk from "chalk";
import debugCreator from "debug";
import app from "./app.js";
import environments from "../loadEnvironments.js";

const debug = debugCreator(environments.debug);

const startServer = async (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.blue(`Server listening to port ${port}`));
      resolve(server);
    });

    server.on("error", (error) => {
      debug(chalk.red("Error starting server", error.message));
      reject(error);
    });
  });

export default startServer;
