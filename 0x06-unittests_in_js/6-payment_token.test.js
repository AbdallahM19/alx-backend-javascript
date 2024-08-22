const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('test the result of getPaymentTokenFromAPI(true)', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.have.property('data', 'Successful response from the API');
        done();
      });
  }));
});
