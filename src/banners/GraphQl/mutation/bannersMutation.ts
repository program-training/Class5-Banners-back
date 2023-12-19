import {
  addBannerService,
  deleteBannerService,
  updateBannerService,
} from "../resolvers/bannerResolvers";

const bannersMutation = {
  addBannerService,
  deleteBannerService,
  updateBannerService,
};

export default bannersMutation;
