import { client } from "./connect-to-postgreSQL";

export default async () => {
  try {
    await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      user_id serial PRIMARY KEY,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      created_on TIMESTAMP NOT NULL
   );`)
  } catch (error) {
    return Promise.reject(error)
  }
}

// export default async () => {
//     await client.query(`
//     CREATE TABLE users (
//     // columns
//     );
//     `);

//     // initialize data
//     await client.query(`
//     INSERT INTO users // data
//     `);
//     } else {
//         console.log("Users table already exists");
//     }
