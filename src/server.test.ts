import request from 'supertest';
import { start, app } from './server';

describe('Server', () => {

  it('responds to GET /', async () => {
    await start()
    const res = await request(app).get('').expect
    expect(res.status).toEqual(200);
  });

});