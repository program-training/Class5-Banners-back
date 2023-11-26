import { getBannerByBannerIDQuery } from "../dal/banners-DAL";

const getBannerByBannerIDService = async (bannerId: string) => {
  try {
    const banner = await getBannerByBannerIDQuery(bannerId);
    if (!banner) throw new Error("banner does not exist");
    return banner;
  } catch (error) {
    return Promise.reject(error);
  }
};
export default getBannerByBannerIDService;
