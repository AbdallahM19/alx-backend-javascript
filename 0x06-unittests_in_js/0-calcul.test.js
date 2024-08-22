const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { it, describe } = require("mocha");


describe('calculateNumber', function() {
  it('should return 4 when input is 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when input is 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when input is 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when input is 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 0 when input is 0 and 0', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return 1 when input is 0.4 and 0.7', function() {
    assert.strictEqual(calculateNumber(0.4, 0.7), 1);
  });

  it('should return -2 when input is -1.4 and -1.4', function() {
    assert.strictEqual(calculateNumber(-1.4, -1.4), -2);
  });

  it('should return -2 when input is -1.5 and -1.4', function() {
    assert.strictEqual(calculateNumber(-1.5, -1.4), -2);
  });
});
