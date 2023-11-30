import pg from 'pg'

export const client = new pg.Client(process.env.POSTGRESQL_CONNECTION_STRING)

export default async () => {
    console.log('trying to connect, con str:', process.env.POSTGRESQL_CONNECTION_STRING);
    await client.connect()
    console.log('connected.');
}