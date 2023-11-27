import { deleteBannerQuery } from "../dal/banners-DAL";

const deleteBannerService = async (id: string) => {
  try {
    const deletedBanner = await deleteBannerQuery(id);
    console.log(deletedBanner);

    if (!deletedBanner) throw new Error("banner not found");
    return deletedBanner;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default deleteBannerService;
