const request = require('request');
const { expect } = require('chai');

describe('api test', () => {
  const url = 'http://localhost:7865/';

  it('should return status code 200 and result', () => new Promise((done) => {
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  }));

  it('should return status code 200 when id is a number', () => new Promise((done) => {
    request.get(`${url}cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  }));

  it('should return status code 404 when id is NOT a number', () => new Promise((done) => {
    request.get(`${url}cart/hello`, (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));

  it('should return status code 404 for invalid cart ID path', () => new Promise((done) => {
    request.get(`${url}cart/12abc`, (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));
});
