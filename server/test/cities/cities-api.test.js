import supertest from 'supertest';
import { app } from '../../app';

describe('GET /', () => {
  it(`should not find 'api/cities/test' endpoint`, async () => {
    await supertest(app).get('/api/cities/test').expect(404);
  });

  it(`should find 'api/cities/' sucessfully`, async () => {
    await supertest(app)
      .get('/api/cities')
      .set('Accept', 'application/json')
      .expect(200);
  });

  it(`should find 'api/cities/check' sucessfully`, async () => {
    await supertest(app)
      .get('/api/cities/check')
      .set('Accept', 'application/json')
      .expect(200);
  });
});
