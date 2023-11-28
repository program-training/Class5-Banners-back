import { generateToken } from "../../models/jwt";
import { comparePassword } from "../helpers/passwordBcrypt";
import { UserInterface } from "../interface/userInterface";
import { getUserByEmailQuery } from "../dal/users-DAL";

export const loginService = async (user: UserInterface) => {
  try {
    if (!user.email || !user.password) throw new Error("invalid details");
    const userCheck = await getUserByEmailQuery(user.email);
    if (!userCheck.length)
      throw new Error("user does not exist! please register");

    const passwordCheck = comparePassword(
      user.password as string,
      userCheck[0].password
    );
    if (!userCheck.length || !passwordCheck)
      throw new Error("Invalid email or password, please try again");

    const { email, user_id } = userCheck[0];
    const token = generateToken(user_id.toString(), email as string);

    return token;
  } catch (error) {
    return Promise.reject(error);
  }
};
