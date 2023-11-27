import { Request, Response } from "express";
import getBannerByUserIdService from "../services/getBannerByUserID";
import { handleError } from "../../utils/handleErrors";

const handleGetBannerByUserIdReq = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const banners = await getBannerByUserIdService(userId);
    return res.send(banners);
  } catch (error) {
    handleError(res, error);
  }
};
export default handleGetBannerByUserIdReq;
