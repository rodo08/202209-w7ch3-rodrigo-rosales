import dotenv from "dotenv";

dotenv.config();

const environment = {
  port: process.env.PORT,
  mongoDbUrl: process.env.MONGODB_URL,
  mongoDbDebug: process.env.DEBUG,
  jwtSecret: process.env.JWS_SECRET,
};

export default environment;
