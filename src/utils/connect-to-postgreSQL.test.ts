import 'dotenv/config'
await (new Promise((res, rej) => res(0)))
import connectToPostgreSQL, { client } from './connect-to-postgreSQL'

describe('initial connection to postgreSQL', () => {

  it('connects to postgres', async () => {
    await connectToPostgreSQL()

    expect(client.query('SELECT 1')).not.toThrow()
  })
})