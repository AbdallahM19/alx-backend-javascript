const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  
  describe('SUM operation', function() {
    it('should return 6 when type is SUM, a is 1.4, and b is 4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 7 when type is SUM, a is 1.5, and b is 5.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.5, 5.5), 8);
    });

    it('should return -4 when type is SUM, a is -2.0, and b is -2.0', function() {
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
    });

    it('should return -4 when type is SUM, a is -2.3, and b is -1.8', function() {
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
    });
  });

  describe('SUBTRACT operation', function() {
    it('should return -4 when type is SUBTRACT, a is 1.4, and b is 4.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0 when type is SUBTRACT, a is 4.5, and b is 4.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 4.5), 0);
    });
  });

  describe('DIVIDE operation', function() {
    it('should return 0.2 when type is DIVIDE, a is 1.4, and b is 4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when type is DIVIDE, a is 1.4, and b is 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 1 when type is DIVIDE, a is 5.5, and b is 5.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 5.5, 5.5), 1);
    });
  });
});
