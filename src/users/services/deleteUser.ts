import jwt, { JwtPayload } from "jsonwebtoken";
import { deleteUserQuery } from "../users-DAL";
const deleteUserService = async (token: string) => {
  try {
    const { user_id } = jwt.decode(token) as JwtPayload;
    const deletedUser = await deleteUserQuery(user_id);
    return deletedUser;
  } catch (error) {
    return Promise.reject(error);
  }
};
export default deleteUserService;
