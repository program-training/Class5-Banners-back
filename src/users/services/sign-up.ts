import bcrypt from "bcrypt";
import { NewUserReqI } from "../../interfaces/interfaces";
import { addUser } from "../users-DAL";
import errors from "../../errors/errors";

const saltRounds = 10;

export default async (user: NewUserReqI) => {
  try {
    const hash = await bcrypt.hash(user.password, saltRounds);
    const addedUser = await addUser({ ...user, passwordHash: hash });
    return addedUser;
  } catch (error) {
    return Promise.reject(error);
  }
};
