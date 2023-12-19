import {
  getAllBannersService,
  getBannerByBannerIDService,
  getBannerByProdIDService,
  getBannerByUserService,
  getProductForBanners,
} from "../resolvers/bannerResolvers";

const bannersQueries = {
  getBannerByProdIDService,
  getAllBannersService,
  getBannerByBannerIDService,
  getBannerByUserService,
  getProductForBanners,
};

export default bannersQueries;
