import { NextFunction } from "express";
import Credentials from "../server/types";

const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body as Credentials;
  const user = await 
}
