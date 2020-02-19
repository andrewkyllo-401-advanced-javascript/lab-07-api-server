const { server } = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Our server.', () => {
  it('Responds correctly on create request to /categories.', () => {
    return mockRequest
      .post('/categories')
      .send({"id": 4,"name": "cars"})
      .then(results => {
        expect(results.status).toBe(201);
        expect(results.body).toStrictEqual({"id": 4,"name": "cars"})
      })
      .catch(console.error);
  });
  it('Responds correctly on create request to /products.', () => {
    return mockRequest
    .post('/products')
    .send({"id": 4,"name": "cars", "description": "car-like"})
    .then(results => {
      expect(results.status).toBe(201);
      expect(results.body).toStrictEqual({"id": 4,"name": "cars", "description": "car-like"})
    })
    .catch(console.error);
  });
  it('Responds correctly on request to /categories.', () => {
    return mockRequest
    .get('/categories')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });
  it('Responds correctly on request to /products.', () => {
    return mockRequest
      .get('/products')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });
  it('Should modify selected object in /products.', () => {
    return mockRequest
      .put('/products/1')
      .send({name:"hot dog", description: "hot doggish"})
      .then(results => {
        expect(results.status).toBe(202);
        expect(results.body.name).toBe('hot dog');
        expect(results.body.description).toBe('hot doggish');
      })
      .catch(console.error);
  })
  it('Should modify selected object in /categories.', () => {
    return mockRequest
      .put('/categories/1')
      .send({name:"cars"})
      .then(results => {
        expect(results.status).toBe(202);
        expect(results.body.name).toBe('cars');
      })
      .catch(console.error);
  })

  it('Responds correctly on delete request to /categories.', () => {
    return mockRequest
      .delete('/categories/1')
      .then(results => {
        expect(results.body).toEqual({});
      })
      .catch(console.error);
  });
  it('Responds correctly on delete request to /products.', () => {
    return mockRequest
      .delete('/products/1')
      .then(results => {
        expect(results.body).toEqual({});
      })
      .catch(console.error);
  });
});