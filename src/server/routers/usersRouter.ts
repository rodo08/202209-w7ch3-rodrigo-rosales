import express from "express";

const usersRouter = express.Router();

usersRouter.post("/login", loginUser);

export default usersRouter;
