import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.disable("x-powered-by");

export default app;
