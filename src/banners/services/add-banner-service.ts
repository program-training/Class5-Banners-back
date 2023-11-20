import { NewBannerI } from "../../types/types";
import { addBanner } from "../banners-DAL";
// import errors from '../../errors/massages'

export default async (banner: NewBannerI) => {
    try {
        // verify productID exist demo
        // if () throw new Error(errors.productIDNotExist);
        const newBanner = await addBanner(banner)
        return newBanner
    } catch (error) {
        return Promise.reject(error)
    }
}