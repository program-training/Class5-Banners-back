import { client } from "../utils/connect-to-postgreSQL";
import { NewUserDBI } from "../interfaces/interfaces";
import errors from "../errors/errors";

export const getUserByID = async (ID: string) => {
  try {
    const user = await client.query(`
    SELECT * FROM users WHERE user_id = ${ID}
    `);
    console.log(user);

    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addUser = async (user: NewUserDBI) => {
  try {
    await client.query(`
    INSERT INTO users (username, password_hash, email)
    VALUES ('${user.username}', '${user.passwordHash}', '${user.email}')
    `);
    console.log("inserted");

    const newUser = await client.query(`
    SELECT * FROM users WHERE email = '${user.email}'
    `);
    return newUser.rows[0];
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("duplicate") &&
      error.message.includes("username")
    ) {
      return Promise.reject(new Error(errors.usernameTaken));
    }
    if (
      error instanceof Error &&
      error.message.includes("duplicate") &&
      error.message.includes("email")
    ) {
      return Promise.reject(new Error(errors.emailExist));
    }
    return Promise.reject(error);
  }
};
