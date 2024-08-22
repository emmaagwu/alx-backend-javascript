const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('should return 4 when adding equal positive numbers', () => {
      expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
    });

    it('should return 4 when adding numbers that round to 2 and 2', () => {
      expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4);
    });

    it('should return -4 when adding equal negative numbers', () => {
      expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
    });

    it('should return -4 when adding numbers that round to -2 and -2', () => {
      expect(calculateNumber('SUM', -2.3, -1.8)).to.equal(-4);
    });

    it('should return 0 when adding a negative and a positive number', () => {
      expect(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
    });

    it('should return 0 when adding a positive and a negative number', () => {
      expect(calculateNumber('SUM', 2.0, -2.0)).to.equal(0);
    });

    it('should return 0 when adding 0 and 0', () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('should return 0 when subtracting equal positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
    });

    it('should return 0 when subtracting numbers that round to 2 and 2', () => {
      expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.equal(0);
    });

    it('should return 0 when subtracting equal negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
    });

    it('should return 0 when subtracting numbers that round to -2 and -2', () => {
      expect(calculateNumber('SUBTRACT', -2.3, -1.8)).to.equal(0);
    });

    it('should return -4 when subtracting a positive number from a negative number', () => {
      expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
    });

    it('should return 4 when subtracting a negative number from a positive number', () => {
      expect(calculateNumber('SUBTRACT', 2.0, -2.0)).to.equal(4.0);
    });

    it('should return 0 when subtracting 0 from 0', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('should return 4 when dividing positive numbers', () => {
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
    });

    it('should return -3.5 when dividing a negative number by a positive number', () => {
      expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
    });

    it('should return -3.5 when dividing a positive number by a negative number', () => {
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
    });

    it('should return 3.5 when dividing negative numbers', () => {
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    });

    it('should return 1 when dividing equal positive numbers', () => {
      expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
    });

    it('should return 1 when dividing equal negative numbers', () => {
      expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
    });

    it('should return 1 when dividing numbers that round to 3 and 3', () => {
      expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
    });

    it('should return 1 when dividing numbers that round to 2 and 2', () => {
      expect(calculateNumber('DIVIDE', 2.4, 2.0)).to.equal(1);
    });

    it('should return 0 when dividing 0 by a positive number', () => {
      expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
    });

    it('should return 0 when dividing 0 by a negative number', () => {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(0);
    });

    it('should return "Error" when dividing a positive number by 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
    });

    it('should return "Error" when dividing a positive number by a number rounded down to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
    });

    it('should return "Error" when dividing a positive number by a number rounded up to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
    });

    it('should return "Error" when dividing a negative number by 0', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
    });

    it('should return "Error" when dividing a negative number by a number rounded down to 0', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
    });

    it('should return "Error" when dividing a negative number by a number rounded up to 0', () => {
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
    });

    it('should return "Error" when dividing 0 by 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});
