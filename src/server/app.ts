import express from "express";
import morgan from "morgan";
import { generalError, notFoundError } from "./middlewares/error.js";
import usersRouter from "./routers/usersRouter.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/users", usersRouter);

app.use(notFoundError);
app.use(generalError);

export default app;
