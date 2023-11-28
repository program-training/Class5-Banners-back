import jwt, { JwtPayload } from "jsonwebtoken";
import { getUserByEmailQuery } from "../dal/users-DAL";
import { UserInterface } from "../interface/userInterface";

const getUserService = async (token: string) => {
  try {
    const { email } = jwt.decode(token) as JwtPayload;
    const user: UserInterface[] = await getUserByEmailQuery(email);

    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getUserService;
