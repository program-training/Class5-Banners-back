import { client } from "../../utils/connect-to-postgreSQL";
import { NewUserDBI } from "../../interfaces/interfaces";
import errors from "../../errors/errors";
import { insertQGenerator, updateQGenerator } from "../helpers/queryGenerators";
import { getArrOfObjEntries } from "../helpers/getArrOfObjEntries";
import { UserInterface } from "../interface/userInterface";

export const getUserByID = async (ID: string) => {
  try {
    const user = await client.query(`
    SELECT * FROM users WHERE user_id = '${ID}'
    `);
    console.log(user);

    return user.rows;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addUser = async (user: NewUserDBI) => {
  try {
    const { keys, values } = getArrOfObjEntries(user);

    const query = insertQGenerator({ keys, values });
    const newUser = await client.query(query);

    console.log("inserted");

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

export const getUserByUsernameQuery = async (username: string) => {
  try {
    const query = `SELECT * FROM users WHERE username = '${username}' `;
    const userToSend = await client.query(query);
    return userToSend.rows;
  } catch (error) {
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
    const updatedUser = await client.query(query);
    return updatedUser.rows;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteUserQuery = async (id: string) => {
  try {
    const query = `DELETE FROM users WHERE user_id = ${id} RETURNING *`;
    const deletedUser = await client.query(query);
    return deletedUser.rows;
  } catch (error) {
    return Promise.reject(error);
  }
};
