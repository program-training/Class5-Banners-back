import { Request, Response } from "express";
import updateBannerService from "../services/updateBannerService";
import { handleError } from "../../utils/handleErrors";

const handleEditBanner = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const banner = req.body;
    const update = await updateBannerService(banner, id);
    return res.send(update);
  } catch (error) {
    handleError(res, error);
  }
};
export default handleEditBanner;
