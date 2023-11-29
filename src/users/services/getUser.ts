import jwt, { JwtPayload } from "jsonwebtoken";
import { getUserByUsernameQuery } from "../dal/users-DAL";
import { UserInterface } from "../interface/userInterface";

const getUserService = async (token: string) => {
  try {
    const { username } = jwt.decode(token) as JwtPayload;
    const user: UserInterface[] = await getUserByUsernameQuery(username);

    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getUserService;
