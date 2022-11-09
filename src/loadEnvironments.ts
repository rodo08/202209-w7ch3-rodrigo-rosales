import dotenv from "dotenv";

dotenv.config();

const {
  PORT: port,
  DATABASE_URL: databaseUrl,
  DATABASE_NAME: databaseName,
  SECRET: secret,
} = process.env;

interface Environments {
  port: number;
  database: {
    url: string;
    name: string;
  };
  secret: string;
}

const enviroments: Environments = {
  // eslint-disable-next-line no-implicit-coercion
  port: +port,
  database: {
    url: databaseUrl,
    name: databaseName,
  },
  secret,
};

export default enviroments;
