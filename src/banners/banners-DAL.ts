import { Schema, model } from "mongoose";
import { BannerI, NewBannerI } from "../types/types";
import errors from '../errors/massages'

const bannerSchema = new Schema<BannerI>({
    productID: { type: String, unique: true },
    title: String,
    description: String,
    imageURL: String,
    note: String,
    author: {
        type: Schema.Types.ObjectId, 
        ref: 'Person' 
      }
});

const Banner = model('banner', bannerSchema)

export const addBanner = async (banner: NewBannerI) => {
    try {
        const newBanner = new Banner(banner)
        const savedBanner = await newBanner.save()
        return savedBanner
    } catch (error) {
        if (error instanceof Error && 
            error.message.includes('duplicate key error') &&
            error.message.includes('index: productID')) {
                return Promise.reject(new Error(errors.bannerExistForProduct))
            }
        return Promise.reject(error)
    }
}