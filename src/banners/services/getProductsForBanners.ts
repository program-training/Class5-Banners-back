import getAllProducts from "../../utils/getAllProducts";
import { getAllBannersQuery } from "../dal/banners-DAL";
import getUnBanneredProducts from "../helpers/getUnbanneredProducts";

const getProductForBanners = async () => {
  try {
    const products = await getAllProducts();
    const banners = await getAllBannersQuery();
    const filteredProduct = getUnBanneredProducts(products, banners);
    const normalizedProducts = filteredProduct.map(pr => {
      return {...pr, title: pr.name}
    })
    return normalizedProducts;
  } catch (error) {
    return Promise.reject(error);
  }
};
export default getProductForBanners;
