import type { Request, Response, NextFunction } from "express";
import Item from "../database/models/items.js";

const getItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await Item.find();
    res.status(200).json({ items });
  } catch (error: unknown) {
    next(error);
  }
};

export default getItems;
