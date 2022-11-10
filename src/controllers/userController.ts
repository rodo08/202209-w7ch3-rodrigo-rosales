import type { NextFunction } from "express";
import type Credentials from "../server/types";

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body as Credentials;
  const user = await User.findOne({ username });
  if (!user) {
    const error = new CustomError();
  }
};
