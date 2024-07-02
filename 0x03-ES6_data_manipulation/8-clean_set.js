/**
 * Removes the startString from each string element in the set and returns the cleaned set as a hyphen-separated string.
 * 
 * @param {Set} set - The set to clean.
 * @param {string} startString - The string to remove from the beginning of each element in the set.
 * @returns {string} - The cleaned set as a hyphen-separated string.
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
