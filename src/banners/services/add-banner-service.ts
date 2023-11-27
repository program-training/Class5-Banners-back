import { NewBannerI } from "../../interfaces/interfaces";
import { getUserByID } from "../../users/users-DAL";
import { addBanner } from "../dal/banners-DAL";
import jwt, { JwtPayload } from "jsonwebtoken";
// import errors from '../../errors/massages'

export default async (banner: NewBannerI, token: string) => {
  try {
    // verify productID exist demo
    // if () throw new Error(errors.productIDNotExist);
    const decodedToken = jwt.decode(token);
    const { user_id } = decodedToken as JwtPayload;
    const user = await getUserByID(user_id);
    banner.authorID = user[0].username;
    const newBanner = await addBanner(banner);
    return newBanner;
  } catch (error) {
    return Promise.reject(error);
  }
};
