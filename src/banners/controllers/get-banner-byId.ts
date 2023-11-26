import { Request, Response } from "express";
import getBannerByProdIDService from "../services/get-banner-byProdId-service";
import handleControllerError from "../../errors/handle-controller-error";

const handleGetBannerByProdIdReq = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const banner = await getBannerByProdIDService(productId);
    return res.send(banner);
  } catch (error) {
    handleControllerError(req, res, error);
  }
};

export default handleGetBannerByProdIdReq;
