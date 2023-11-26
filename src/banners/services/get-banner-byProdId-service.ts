import { getBannerByProdIDQuery } from "../banners-DAL";

const getBannerByProdIDService = async (prodId: string) => {
  try {
    const banner = await getBannerByProdIDQuery(prodId);
    if (!banner.length) throw new Error("no banner found");
    return banner;
  } catch (error) {
    return Promise.reject(error);
  }
};
export default getBannerByProdIDService;
