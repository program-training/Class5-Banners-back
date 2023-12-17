import { getAllBannersQuery } from "../dal/banners-DAL";

const getAllBannersService = async () => {
  try {
    const banners = await getAllBannersQuery();
    if (!banners.length) throw new Error("no banners found");
    return banners;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getAllBannersService;
