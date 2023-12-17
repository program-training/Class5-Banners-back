import { Request, Response } from "express";
import { handleError } from "../../utils/handleErrors";

const handleResetPassword = async (req: Request, res: Response) => {
  try {
    const email = req.body;
    const link = "";
    return { email, link };
  } catch (error) {
    handleError(res, error);
  }
};
export default handleResetPassword;
