import chalk from "chalk";
import debug from "debug";
import type { Request, Response, NextFunction } from "express";
import CustomError from "../../CustomError/CustomError.js";

export const notFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new CustomError(
    "Endpoint not found",
    404,
    "Endpoint not found"
  );
  next(error);
};

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars
  next: NextFunction
) => {
  const statusCode = error.status ?? 500;
  const publicMessage = error.message || "Infernal pete";

  debug(chalk.red.bold(error.message));

  res.status(statusCode).json({ publicMessage });
};
