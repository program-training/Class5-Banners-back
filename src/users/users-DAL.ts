import pg from 'pg'

import { client } from '../utils/connect-to-postgreSQL';
import { NewUserDBI } from '../types/types';

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});

export const addUser = async (user: NewUserDBI) => {
  try {
    const newUser = await client.query(`
    `)
  } catch (error) {
    
  }
}