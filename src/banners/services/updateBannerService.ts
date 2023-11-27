import { BannerI } from "../../interfaces/interfaces";
import { updateBannerQuery } from "../dal/banners-DAL";

const updateBannerService = async (banner: BannerI, id: string) => {
  try {
    const update = await updateBannerQuery(id, banner);
    return update;
  } catch (error) {
    return Promise.reject(error);
  }
};
export default updateBannerService;
