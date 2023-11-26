import { Schema, model } from "mongoose";
import { BannerI, NewBannerI } from "../types/types";
import errors from '../errors/errors'

const bannerSchema = new Schema<BannerI>({
    productID: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true }, 
    imageURL: { type: String, required: true },
    note: { type: String, required: true },
    productURL: { type: String, require: true },
    authorID: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now }
});

const Banner = model('banner', bannerSchema)

export const addBanner = async (banner: NewBannerI) => {
    try {
        const newBanner = new Banner(banner)
        console.log('new banner:', newBanner);
        
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