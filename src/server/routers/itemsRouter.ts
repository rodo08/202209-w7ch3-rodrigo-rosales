import { Router } from "express";
import getItems from "../../controllers/itemControllers.js";

// eslint-disable-next-line new-cap
const itemsRouter = Router();

itemsRouter.get("/list", getItems);

export default itemsRouter;
