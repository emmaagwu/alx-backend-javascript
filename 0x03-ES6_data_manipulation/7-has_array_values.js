/**
 * Checks if a Set contains all the values from an array.
 *
 * @param {Set} set - The Set to check.
 * @param {Array} array - The array of values to check.
 * @returns {boolean} - True if the Set contains all the values from the array, false otherwise.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
