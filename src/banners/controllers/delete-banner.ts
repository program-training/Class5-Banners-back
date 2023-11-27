import { Request, Response } from "express";
import { handleError } from "../../utils/handleErrors";
import deleteBannerService from "../services/delete-banner-service";

const handleDeleteBannerReq = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedBanner = await deleteBannerService(id);
    return res.send(deletedBanner);
  } catch (error) {
    handleError(res, error);
  }
};

export default handleDeleteBannerReq;
