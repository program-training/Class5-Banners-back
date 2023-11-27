import { Request, Response } from "express";
import { handleError } from "../../utils/handleErrors";
import updatedUserService from "../services/updateUser";

const handleUpdateUser = async (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;
    const user = req.body;
    const updatedUser = await updatedUserService(authorization as string, user);
    return res.send(updatedUser[0]);
  } catch (error) {
    handleError(res, error);
  }
};
export default handleUpdateUser;
