import startServer from "./server/index.js";
import environments from "./loadEnvironments.js";
import connectDb from "./database/index.js";

const {
  port,
  database: { url },
} = environments;
await startServer(port);

await connectDb(url);
