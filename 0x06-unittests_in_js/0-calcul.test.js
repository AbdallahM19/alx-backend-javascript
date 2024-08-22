const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when input is 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when input is 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when input is 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when input is 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 3 when input is 1.0 and 2.0', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('should return 3 when input is 1.0 and 2.4', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('should return 3 when input is 1.4 and 2.4', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('should return 3 when input is 1.4 and 2.0', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('should return 4 when input is 1.0 and 2.5', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('should return 6 when input is 2.6 and 2.5', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('should return 5 when input is 2.6 and 2.0', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('should return 5 when input is 2.499999 and 3.499999', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
