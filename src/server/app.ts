import express from "express";
import morgan from "morgan";
import usersRouter from "./routers/usersRouter";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/users", usersRouter);

app.disable("x-powered-by");

export default app;
