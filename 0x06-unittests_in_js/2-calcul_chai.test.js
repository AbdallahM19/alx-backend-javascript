const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('sUM operation', () => {
    it('should return 6 when type is SUM, a is 1.4, and b is 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 7 when type is SUM, a is 1.5, and b is 5.5', () => {
      expect(calculateNumber('SUM', 1.5, 5.5)).to.equal(8);
    });

    it('should return -4 when type is SUM, a is -2.0, and b is -2.0', () => {
      expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
    });

    it('should return -4 when type is SUM, a is -2.3, and b is -1.8', () => {
      expect(calculateNumber('SUM', -2.3, -1.8)).to.equal(-4);
    });
  });

  describe('sUBTRACT operation', () => {
    it('should return -4 when type is SUBTRACT, a is 1.4, and b is 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0 when type is SUBTRACT, a is 4.5, and b is 4.5', () => {
      expect(calculateNumber('SUBTRACT', 4.5, 4.5)).to.equal(0);
    });
  });

  describe('dIVIDE operation', () => {
    it('should return 0.2 when type is DIVIDE, a is 1.4, and b is 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when type is DIVIDE, a is 1.4, and b is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 1 when type is DIVIDE, a is 5.5, and b is 5.5', () => {
      expect(calculateNumber('DIVIDE', 5.5, 5.5)).to.equal(1);
    });
  });
});
