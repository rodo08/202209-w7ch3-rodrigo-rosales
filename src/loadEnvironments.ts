import dotenv from "dotenv";

dotenv.config();

const {
  PORT: port,
  DATABASE_URL: databaseUrl,
  DATABASE_NAME: databaseName,
  SECRET: secret,
  DEBUG: debug,
} = process.env;

interface Environments {
  port: number;
  database: {
    url: string;
    name: string;
  };
  secret: string;
  debug: string;
}

const environments: Environments = {
  // eslint-disable-next-line no-implicit-coercion
  port: +port,
  database: {
    url: databaseUrl,
    name: databaseName,
  },
  secret,
  debug,
};

export default environments;
