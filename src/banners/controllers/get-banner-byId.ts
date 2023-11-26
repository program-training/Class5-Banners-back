import { Request, Response } from "express";
import getBannerByProdIDService from "../services/get-banner-byProdId-service";
import handleControllerError from "../../errors/handle-controller-error";
import getBannerByBannerIDService from "../services/getBannerByBanner";

const handleGetBannerByIdReq = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let banner;
    if (id.length < 4) {
      banner = await getBannerByProdIDService(id);
    } else {
      banner = await getBannerByBannerIDService(id);
    }
    return res.send(banner);
  } catch (error) {
    handleControllerError(req, res, error);
  }
};

export default handleGetBannerByIdReq;
