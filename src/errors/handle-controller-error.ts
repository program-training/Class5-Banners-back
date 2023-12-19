import { Request, Response } from "express";
import logger from "./errors-logger";

export default async (req: Request, res: Response, error: unknown) => {
  try {
    res.status(500).send("an internal server error had occurred");
    logger(error);
  } catch (error) {
    logger(error);
  }
};
