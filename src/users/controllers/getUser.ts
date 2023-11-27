import { Request, Response } from "express";
import getUserService from "../services/getUser";
import { handleError } from "../../utils/handleErrors";

const handleGetUser = async (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;
    const user = await getUserService(authorization as string);
    return res.send(user[0]);
  } catch (error) {
    handleError(res, error);
  }
};

export default handleGetUser;
