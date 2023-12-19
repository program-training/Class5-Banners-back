import { generateToken } from "../../models/jwt";
import {
  comparePassword,
  generateUserPassword,
} from "../helpers/passwordBcrypt";
import { UserInterface } from "../interface/userInterface";
import {
  addUser,
  deleteUserQuery,
  getUserByEmailQuery,
  getUserByID,
  getUserByUsernameQuery,
  updateUserQuery,
} from "../dal/users-DAL";
import { BaseContext } from "@apollo/server";

interface User {
  user: UserInterface;
}

export const loginService = async (_: unknown, { user }: User) => {
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

    const { isAdmin, user_id, username } = userCheck[0];
    const token = generateToken(user_id.toString(), isAdmin, username);
    return token;
  } catch (error) {
    return Promise.reject(error);
  }
};

export interface UserFromToken extends BaseContext {
  isAdmin: boolean;
  username: string;
  user_id: string;
}

export const deleteUserService = async (
  _: unknown,
  _args: unknown,
  { user_id }: UserFromToken
) => {
  try {
    const deletedUser = await deleteUserQuery(user_id);
    if (!deletedUser.length) throw new Error("user not found");
    return deletedUser;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUserService = async (
  _: unknown,
  _args: unknown,
  { username }: UserFromToken
) => {
  try {
    const user: UserInterface[] = await getUserByUsernameQuery(username);

    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const signup = async (_: unknown, { user }: User) => {
  try {
    const hash = generateUserPassword(user.password);
    const addedUser = await addUser({ ...user, password: hash });
    return addedUser;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updatedUserService = async (
  _: unknown,
  { user: userData }: User,
  { user_id }: UserFromToken
) => {
  try {
    const existingUser = await getUserByID(user_id);
    const password = userData.password
      ? generateUserPassword(userData.password)
      : existingUser.password;
    const combined = {
      email: userData.email,
      isAdmin: userData.isAdmin,
      username: userData.username,
      password,
    };
    const updatedUser = await updateUserQuery(user_id, combined);
    return updatedUser;
  } catch (error) {
    return Promise.reject(error);
  }
};
