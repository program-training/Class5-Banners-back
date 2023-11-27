import { client } from "../utils/connect-to-postgreSQL";
import { NewUserDBI } from "../interfaces/interfaces";
import errors from "../errors/errors";
import { updateQGenerator } from "./helpers/queryGenerators";
import { getArrOfObjEntries } from "./helpers/getArrOfObjEntries";
import { UserInterface } from "./interface/userInterface";

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
    INSERT INTO users (username, password, email)
    VALUES ('${user.username}', '${user.password}', '${user.email}')
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

export const getUserByEmailQuery = async (email: string) => {
  try {
    const query = `SELECT * FROM users WHERE email = '${email}' `;
    const userToSend = await client.query(query);
    return userToSend.rows;
  } catch (error) {
    return Promise.reject(error);
  }
};
export const updateUserQuery = async (id: string, user: UserInterface) => {
  try {
    const { keys, values } = getArrOfObjEntries(user);
    const query = updateQGenerator(id, { keys, values });
    console.log(query);

    const updatedUser = await client.query(query);
    return updatedUser.rows;
  } catch (error) {
    return Promise.reject(error);
  }
};
