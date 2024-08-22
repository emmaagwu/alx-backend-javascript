const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('summing equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.7, 1.7), 4);
    });

    it('adding different positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 5.3, 3.8), 9);
    });

    it('summing up positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 6.5, -2.5), 5);
    });

    it('adding two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -3.7, -2.2), -6);
    });

    it('sum of positive number and zero', () => {
      assert.strictEqual(calculateNumber('SUM', 3.0, 0.0), 3);
    });

    it('summing a positive number and a negative number resulting in zero', () => {
      assert.strictEqual(calculateNumber('SUM', 4.0, -4.0), 0);
    });

    it('sum of negative and positive numbers that results in zero', () => {
      assert.strictEqual(calculateNumber('SUM', -5.0, 5.0), 0);
    });

    it('adding zero and zero', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });

    // Additional test cases
    it('summing a large positive number with a small negative number', () => {
      assert.strictEqual(calculateNumber('SUM', 1000.3, -0.8), 999);
    });

    it('sum of fractional positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 3.7, -2.7), 1);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('subtracting equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
    });

    it('difference of two positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.7, 3.3), 3);
    });

    it('subtracting negative from positive', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 8.5, -3.5), 12);
    });

    it('difference between equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -4.0, -4.0), 0);
    });

    it('subtracting positive from negative', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -6.4, 2.3), -8);
    });

    it('subtracting zero from a positive number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 7.0, 0.0), 7);
    });

    it('difference when both numbers are zero', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });

    // Additional test cases
    it('subtracting larger positive number from smaller one', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });

    it('difference between large positive and small negative number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1000.4, -0.4), 1000);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('dividing positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 9.0, 3.0), 3);
    });

    it('division resulting in a negative quotient', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.2, -2.0), -4);
    });

    it('dividing by a number close to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.4, 0.1), 'Error');
    });

    it('dividing negative by positive resulting in a negative quotient', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -9.0, 3.0), -3);
    });

    it('dividing two negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8.0, -2.0), 4);
    });

    it('division of positive number by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10.0, 0), 'Error');
    });

    it('dividing zero by a positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 7.0), 0);
    });

    it('division of zero by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });

    // Additional test cases
    it('dividing positive number by a small negative number rounded up to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.3), 'Error');
    });

    it('division resulting in large quotient', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1000.0, 0.001), 'Error');
  });
});
});
