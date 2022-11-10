import startServer from "./server/index.js";
import environments from "./loadEnvironments.js";
import connectDb from "./database/index.js";

const {
  port,
  database: { url },
} = environments;
await startServer(port);

await connectDb(url);

/* Try {
  await startServer(app, +port);
  debug(chalk.green.bold(`Server listening on http://localhost:${port}`));
  await connectDb(mongoDbUrl);
  debug(chalk.green.bold("Connected to database"));
} catch (error: unknown) {
  debug(chalk.red.bold("Error starting the API: ", (error as Error).message));
} */
