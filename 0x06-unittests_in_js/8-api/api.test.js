const request = require('request');
const { expect } = require('chai');

describe('index page', () => {
  const url = 'http://localhost:7865/';

  it('should return status code 200 and result', () => new Promise((done) => {
    request.get(url, (error, response, body) => {
      if (error) {
        done(error);
      } else {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      }
    });
  }));
});
