import { getBannerByUserIdQuery } from "../dal/banners-DAL";
import jwt, { JwtPayload } from "jsonwebtoken";
const getBannerByUserService = async (token: string) => {
  try {
    const decodedToken = jwt.decode(token);
    const { user_id } = decodedToken as JwtPayload;

    const banners = await getBannerByUserIdQuery(user_id);

    if (!banners.length) throw new Error("no banner found");
    return banners;
  } catch (error) {
    return Promise.reject(error);
  }
};
export default getBannerByUserService;
