const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('rounding up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(3.6, 4.0), 8);
  });

  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(2.0, 3.0), 5);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 4.499999), 6);
  });

  it('rounding up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(5.6, 3.5), 10);
  });

  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(3.0, 6.4), 9);
  });

  it('rounding up b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.0, 3.5), 6);
  });

  it('rounding down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(7.4, 2.0), 9);
  });

  it('rounding down a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(3.4, 5.0), 8);
  });
  
  it('rounding up both numbers with .5 fractions', () => {
    assert.strictEqual(calculateNumber(2.5, 4.5), 8);
  });

  it('rounding down a, rounding up b', () => {
    assert.strictEqual(calculateNumber(7.4, 8.5), 16);
  });

  it('rounding up a, rounding down b', () => {
    assert.strictEqual(calculateNumber(6.6, 9.3), 16);
  });

  it('large floating point numbers with rounding', () => {
    assert.strictEqual(calculateNumber(1000.7, 2000.2), 3001);
  });

  it('small floating point numbers with rounding', () => {
    assert.strictEqual(calculateNumber(0.4, 0.7), 1);
  });
});

