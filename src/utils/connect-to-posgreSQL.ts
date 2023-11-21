import pg from 'pg'

export const client = new pg.Client(process.env.POSTGRESQL_CONNECTION_STRING)

export const connect = async () => {
    await client.connect()
}