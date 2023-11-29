import jwt from "jsonwebtoken";
import "dotenv/config";

const KEY = process.env.JWT_SECRET;

export const generateToken = (
  user_id: string,
  isAdmin: boolean,
  username: string
) => {
  if (!KEY) throw new Error("key is not defined");
  const token = jwt.sign({ user_id, isAdmin, username }, KEY);
  return token;
};

export const verifyToken = (tokenFromUser: string) => {
  try {
    if (!KEY) throw new Error("key is not defined");
    const userPayload = jwt.verify(tokenFromUser, KEY);
    return userPayload;
  } catch (error) {
    return null;
  }
};
