import getAllProducts from "../../../utils/getAllProducts";
import {
  addBannerToCache,
  getAllBannersFromCache,
  getBannerByBannerIDFromCache,
  getBannerByProdIDFromCache,
  getBannerByUserIdFromCache,
} from "../../cache/bannersCache";
import {
  deleteBannerQuery,
  getAllBannersQuery,
  getBannerByUserIdQuery,
  updateBannerQuery,
} from "../../dal/bannersDal";
import getUnBanneredProducts from "../../helpers/getUnbanneredProducts";
import { Args } from "../interface/graphqlArgument";

export const addBannerService = async (
  _: any,
  { banner }: Args,
  { user_id }: any
) => {
  try {
    banner.authorID = user_id;
    const newBanner = await addBannerToCache(banner);
    return newBanner;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteBannerService = async (_: any, { bannerId }: Args) => {
  try {
    const deletedBanner = await deleteBannerQuery(bannerId);
    if (!deletedBanner) throw new Error("banner not found");
    return deletedBanner;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBannerByProdIDService = async (_: any, { productID }: Args) => {
  try {
    const banner = await getBannerByProdIDFromCache(productID);
    if (!banner) throw new Error("no banner found");
    return banner;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAllBannersService = async () => {
  try {
    const banners = await getAllBannersFromCache();
    if (!banners) throw new Error("no banners found");
    return banners;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBannerByBannerIDService = async (
  _: any,
  { bannerId }: Args
) => {
  try {
    const banner = await getBannerByBannerIDFromCache(bannerId);
    if (!banner) throw new Error("banner does not exist");
    return banner;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBannerByUserService = async (
  _: any,
  _args: Args,
  { user_id }: any
) => {
  try {
    const banners = await getBannerByUserIdFromCache(user_id);

    if (!banners) throw new Error("no banner found");
    return banners;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProductForBanners = async () => {
  try {
    const products = await getAllProducts();
    const banners = await getAllBannersQuery();
    const filteredProduct = getUnBanneredProducts(products, banners);
    const normalizedProducts = filteredProduct.map((pr) => {
      return { ...pr, title: pr.name };
    });
    return normalizedProducts;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateBannerService = async (
  _: any,
  { bannerId, properties }: Args
) => {
  try {
    console.log(properties, bannerId);

    const update = await updateBannerQuery(bannerId, properties);

    return update;
  } catch (error) {
    return Promise.reject(error);
  }
};
