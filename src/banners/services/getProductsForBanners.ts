import getAllProducts from "../../utils/getAllProducts";
import { getAllBannersQuery } from "../dal/banners-DAL";
import getUnBanneredProducts from "../helpers/getUnbanneredProducts";

const getProductForBanners = async () => {
  try {
    const products = await getAllProducts();
    const banners = await getAllBannersQuery();
    const filteredProduct = getUnBanneredProducts(products, banners);
    return filteredProduct;
  } catch (error) {
    return Promise.reject(error);
  }
};
export default getProductForBanners;
