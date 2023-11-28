import { Schema, model } from "mongoose";
import { NewUserDBI, UserI } from "../../interfaces/interfaces";
import errors from "../../errors/errors";

const userSchema = new Schema<UserI>({
  email: { type: String, require: true, unique: true },
  username: { type: String, require: true },
  isAdmin: { type: Boolean, require: true },
  password: { type: String, require: true },
});

const User = model("user", userSchema);

export const addUser = async (user: NewUserDBI) => {
  try {
    const newUser = new User(user);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("duplicate key error") &&
      error.message.includes("index: email")
    ) {
      return Promise.reject(new Error(errors.emailExist));
    }
    return Promise.reject(error);
  }
};
