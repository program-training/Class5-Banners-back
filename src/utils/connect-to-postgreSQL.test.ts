import 'dotenv/config'
import connectToPostgreSQL, { client } from './connect-to-postgreSQL'

describe('initial connection to postgreSQL', () => {

  it('connects to postgres', async () => {
    await connectToPostgreSQL()

    const results = await client.query('SELECT 1')
    
    expect(results.rows[0]['?column?']).toBe(1)
  })
})