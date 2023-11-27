import { Request, Response } from "express";
import getProductForBanners from "../services/getProductsForBanners";
import { handleError } from "../../utils/handleErrors";

const handleGetUnBanneredProducts = async (req: Request, res: Response) => {
  try {
    const products = await getProductForBanners();
    return res.send(products);
  } catch (error) {
    handleError(res, error);
  }
};
export default handleGetUnBanneredProducts;
