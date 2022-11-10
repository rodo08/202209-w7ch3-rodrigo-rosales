import startServer from "./server/index.js";
import environments from "./loadEnvironments.js";

const { port } = environments;
await startServer(port);
