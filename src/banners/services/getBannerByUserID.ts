import { getBannerByUserIdQuery } from "../dal/banners-DAL";

const getBannerByUserIdService = async (id: string) => {
  try {
    const banners = await getBannerByUserIdQuery(id);
    if (!banners.length) throw new Error("no banner found");
    return banners;
  } catch (error) {
    return Promise.reject(error);
  }
};
export default getBannerByUserIdService;
