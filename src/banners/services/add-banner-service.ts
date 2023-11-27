import { NewBannerI } from "../../interfaces/interfaces";
import { addBanner } from "../dal/banners-DAL";
import jwt, { JwtPayload } from "jsonwebtoken";
// import errors from '../../errors/massages'

export default async (banner: NewBannerI, token: string) => {
  try {
    // verify productID exist demo
    // if () throw new Error(errors.productIDNotExist);
    const decodedToken = jwt.decode(token);
    const { user_id } = decodedToken as JwtPayload;
    banner.authorID = user_id;
    const newBanner = await addBanner(banner);
    return newBanner;
  } catch (error) {
    return Promise.reject(error);
  }
};
