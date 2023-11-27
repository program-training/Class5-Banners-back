import { Request, Response } from "express";
import deleteUserService from "../services/deleteUser";
import { handleError } from "../../utils/handleErrors";

const handleDeleteUserReq = async (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;
    const deletedUser = await deleteUserService(authorization as string);
    return res.send(deletedUser);
  } catch (error) {
    handleError(res, error);
  }
};
export default handleDeleteUserReq;
