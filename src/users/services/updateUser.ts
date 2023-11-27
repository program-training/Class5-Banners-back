import { UserI } from "../../interfaces/interfaces";
import jwt, { JwtPayload } from "jsonwebtoken";
import { updateUserQuery } from "../users-DAL";
import { generateUserPassword } from "../helpers/passwordBcrypt";

const updatedUserService = async (token: string, userData: UserI) => {
  try {
    const { user_id } = jwt.decode(token) as JwtPayload;
    userData.password = generateUserPassword(userData.password);
    const updatedUser = await updateUserQuery(user_id, userData);
    return updatedUser;
  } catch (error) {
    return Promise.reject(error);
  }
};
export default updatedUserService;
