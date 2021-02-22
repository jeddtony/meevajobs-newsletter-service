const request = require('supertest');
const app = require('../../app');

beforeAll(done => {
    done()

})
    describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  });

  describe('Test the service is running', () => {
    it('should return a welcome message', async () => {
     let res = await request(app)
      .get('/')
      .set('Accept', 'application/json')
    //   .expect('Content-Type', /json/)
      expect(res.status).toEqual(200);
    //   expect(res.body).toHaveProperty("data");
    })
  });

  describe('Can subscribe to newsletter', () => {
    it('should return successful subscription message', async() => {
      const res = await request(app)
    .post('/api/users')
    .send({
      "email": "john@mail.com",
      "name": "John"
    })
  expect(res.status).toEqual(200);
    });
})

describe('Can unsubscribe from newsletter', () => {
    it('should return successful deactivation message', async() => {
        const store = await request(app)
        .post('/api/users')
        .send({
          "email": "john@mail.com",
          "name": "John"
        })

      const res = await request(app)
    .delete('/api/users')
    .send({
      "email": "john@mail.com"
    })
  expect(res.status).toEqual(200);
    });
})

describe('Can unsubscribe from newsletter', () => {
    it('should return successful deactivation message', async() => {
        const store = await request(app)
        .post('/api/users')
        .send({
          "email": "john@mail.com",
          "name": "John"
        })

      const res = await request(app)
    .delete('/api/users')
    .send({
      "email": "john@mail.com"
    })
  expect(res.status).toEqual(200);
    });
})

describe('Can view list of subscribers', () => {
    it('should return a the list of subscribers', async () => {
        const store = await request(app)
        .post('/api/users')
        .send({
          "email": "john@mail.com",
          "name": "John"
        })

     let res = await request(app)
      .get('/api/users')
      .set('Accept', 'application/json')
    //   .expect('Content-Type', /json/)
      expect(res.status).toEqual(200);
    //   expect(res.body).toHaveProperty("data");
    })
  });
  afterAll(done => {
   
    done()
  })