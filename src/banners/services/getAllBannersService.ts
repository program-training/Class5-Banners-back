import { getUserByID } from "../../users/users-DAL";
import { getAllBannersQuery } from "../dal/banners-DAL";

const getAllBannersService = async () => {
  try {
    // db
    // await new Promise(() => {})
    const banners = await getAllBannersQuery();
    if (!banners.length) throw new Error("no banners found");
    const bannersWithAuthorsPromises = banners.map(async banner => {
      try {
        const res = await getUserByID(banner.authorID)
        const author = res[0]
        return {...banner.toObject(), authorUsername: author.username || 'unknown'}
      } catch (error) {
        console.error(error);
        return {...banner.toObject(), authorUsername: 'unknown'}
      }
    })
    const bannersWithAuthors = await Promise.all(bannersWithAuthorsPromises)
    return bannersWithAuthors;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getAllBannersService;
