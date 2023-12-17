import { RedisJSON } from "@redis/json/dist/commands";
import redisClient from "../../utils/connectToRedis";
import {
  addBanner,
  getAllBannersQuery,
  getBannerByBannerIDQuery,
  getBannerByProdIDQuery,
  getBannerByUserIdQuery,
} from "../dal/bannersDal";
import { NewBannerI } from "../../interfaces/interfaces";

export const getAllBannersFromCache = async () => {
  try {
    let banners;
    banners = await redisClient.json.get("banners");
    if (!banners) {
      banners = await getAllBannersQuery();
      await redisClient.json.set(
        "banners",
        ".",
        banners as unknown as RedisJSON
      );
      await redisClient.expire("banners", 36000);
    }
    return banners;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBannerByBannerIDFromCache = async (id: string) => {
  try {
    let banner;
    banner = await redisClient.json.get("banners", {
      path: `$..[?(@._id=='${id}')]`,
    });
    if (!banner) {
      banner = await getBannerByBannerIDQuery(id);
      await redisClient.json.arrAppend(
        "banners",
        ".",
        banner as unknown as RedisJSON
      );
    }
    return (banner as string[])[0];
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addBannerToCache = async (banner: NewBannerI) => {
  try {
    const newBanner = await addBanner(banner);
    await redisClient.json.arrAppend(
      "banners",
      ".",
      newBanner as unknown as RedisJSON
    );
    return newBanner;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBannerByProdIDFromCache = async (prodId: string) => {
  try {
    let banner;
    banner = await redisClient.json.get("banners", {
      path: `$..[?(@.productID=='${prodId}')]`,
    });
    if (!banner) {
      banner = await getBannerByProdIDQuery(prodId);
      await redisClient.json.arrAppend(
        "banners",
        ".",
        banner as unknown as RedisJSON
      );
    }
    return banner;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBannerByUserIdFromCache = async (userId: string) => {
  try {
    let banner;
    banner = await redisClient.json.get("banners", {
      path: `$..[?(@.authorID=='${userId}')]`,
    });
    if (!banner) {
      banner = await getBannerByUserIdQuery(userId);
      await redisClient.json.arrAppend(
        "banners",
        ".",
        banner as unknown as RedisJSON
      );
    }
    return banner;
  } catch (error) {
    return Promise.reject(error);
  }
};
