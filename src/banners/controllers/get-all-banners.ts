import { Request, Response } from "express";
import getAllBannersService from "../services/getAllBannersService";
import handleControllerError from "../../errors/handle-controller-error";

const handleGetAllBannersReq = async (req: Request, res: Response) => {
  try {
    const banners = await getAllBannersService();
    return res.send(banners);
  } catch (error) {
    handleControllerError(req, res, error);
  }
};

export default handleGetAllBannersReq;
