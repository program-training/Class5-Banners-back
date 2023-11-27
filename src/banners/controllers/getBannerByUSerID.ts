import { Request, Response } from "express";
import getBannerByUserService from "../services/getBannerByUserID";
import { handleError } from "../../utils/handleErrors";

const handleGetBannerByUserReq = async (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;
    const banners = await getBannerByUserService(authorization as string);
    return res.send(banners);
  } catch (error) {
    handleError(res, error);
  }
};
export default handleGetBannerByUserReq;
