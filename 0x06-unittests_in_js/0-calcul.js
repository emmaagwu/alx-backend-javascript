const calculateNumber = function (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return Math.round(a) + Math.round(b);
  }
}

module.exports = calculateNumber;
