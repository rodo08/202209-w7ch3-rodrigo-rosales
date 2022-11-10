import express from "express";
import loginUser from "../../controllers/userController";

// eslint-disable-next-line new-cap
const usersRouter = express.Router();

usersRouter.post("/login", loginUser);

export default usersRouter;
