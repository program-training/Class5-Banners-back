import { Schema, model } from "mongoose";
import { BannerI, NewBannerI } from "../../interfaces/interfaces";
import errors from "../../errors/errors";

const bannerSchema = new Schema<BannerI>(
    {
        productID: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        imageURL: { type: String, required: true },
        note: { type: String },
        productURL: { type: String, require: true },
        authorID: { type: String, required: true },
    },
    { timestamps: true, versionKey: "" }
);

export const Banner = model("banner", bannerSchema);

export const addBanner = async (banner: NewBannerI) => {
    try {
        const newBanner = new Banner(banner);
        console.log("new banner:", newBanner);

        const savedBanner = await newBanner.save();
        return savedBanner;
    } catch (error) {
        if (
            error instanceof Error &&
            error.message.includes("duplicate key error") &&
            error.message.includes("index: productID")
        ) {
            return Promise.reject(new Error(errors.bannerExistForProduct));
        }
        return Promise.reject(error);
    }
};

export const getAllBannersQuery = async () => {
    try {
        const banners = await Banner.find({});
        return banners;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getBannerByProdIDQuery = async (prodId: string) => {
    try {
        const banner = await Banner.find({ productID: prodId });
        return banner;
    } catch (error) {
        return Promise.reject(error);
    }
};
export const updateBanner = async (bannerId: string, properties: Partial<NewBannerI>) => {
    try {
        const updatedBanner = await Banner.findByIdAndUpdate(bannerId, properties, { new: true });
        console.log(updatedBanner);
    
        return updatedBanner
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getBannerByBannerIDQuery = async (bannerId: string) => {
  try {
    const banner = await Banner.findById(bannerId);
    return banner;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBannerByUserIdQuery = async (id: string) => {
  try {
    const banners = await Banner.find({ authorID: id });
    return banners;
  } catch (error) {
    return Promise.reject(error);
  }
};
