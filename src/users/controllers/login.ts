import { Request, Response } from "express";
import { loginService } from "../services/login";
import { handleError } from "../../utils/handleErrors";

export const handleLogInReq = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const token = await loginService(user);

    return res.send(token);
  } catch (error) {
    handleError(res, error);
  }
};
