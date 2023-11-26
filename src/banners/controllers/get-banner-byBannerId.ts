import { Request, Response } from "express";
import getBannerByBannerIDService from "../services/getBannerByBanner";
import { handleError } from "../../utils/handleErrors";

const handleGetBannerByBannerIdReq = async (req: Request, res: Response) => {
  try {
    const { bannerId } = req.params;
    const banner = await getBannerByBannerIDService(bannerId);
    return res.send(banner);
  } catch (error) {
    handleError(res, error);
  }
};
export default handleGetBannerByBannerIdReq;
