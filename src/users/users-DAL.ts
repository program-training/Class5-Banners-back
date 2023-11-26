import { client } from '../utils/connect-to-postgreSQL';
import { NewUserDBI } from '../types/types';
import errors from '../errors/errors'
import { isDigit } from '../utils/verify-input';

export const getUserByID = async (ID: string) => {
  try {
    if (!isDigit(ID)) throw new Error(errors.invalidID);
    const user = await client.query(`
    SELECT * FROM users WHERE user_id = ${ID}
    `)
    if (!user.rows[0]) throw new Error(errors.userNotExist);
    return user.rows[0]
  } catch (error) {
    return Promise.reject(error)
  }
}

export const addUser = async (user: NewUserDBI) => {
  try {
    await client.query(`
    INSERT INTO users (username, password_hash, email)
    VALUES ('${user.username}', '${user.passwordHash}', '${user.email}')
    `)
    console.log('inserted');
    
    const newUser = await client.query(`
    SELECT * FROM users WHERE email = '${user.email}'
    `)
    return newUser.rows[0]
  } catch (error) {
    if (error instanceof Error && error.message.includes('duplicate') && error.message.includes('username')) {
      return Promise.reject(new Error(errors.usernameTaken))
    }
    if (error instanceof Error && error.message.includes('duplicate') && error.message.includes('email')) {
      return Promise.reject(new Error(errors.emailExist))
    }
    return Promise.reject(error)
  }
}