import chalk from "chalk";
import debug from "debug";
import app from "./app";
import "../loadEnvironments";

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
