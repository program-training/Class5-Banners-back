import { generateToken } from "../../middleware/jwt";
import { comparePassword } from "../helpers/passwordBcrypt";
import { UserInterface } from "../interface/userInterface";
import { getUserByEmailQuery } from "../users-DAL";

export const loginService = async (user: UserInterface) => {
  try {
    if (!user.email || !user.password) throw new Error("invalid details");
    const userCheck = await getUserByEmailQuery(user.email);
    if (!userCheck.length)
      throw new Error("user does not exist! please register");
    console.log(user.password, userCheck[0]);

    const passwordCheck = comparePassword(
      user.password as string,
      userCheck[0].password_hash
    );
    if (!userCheck.length || !passwordCheck)
      throw new Error("Invalid email or password, please try again");

    const { email, user_id } = userCheck[0];
    const token = generateToken(email as string, user_id.toString());

    return token;
  } catch (error) {
    return Promise.reject(error);
  }
};
