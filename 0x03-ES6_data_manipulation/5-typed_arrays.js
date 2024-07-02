/**
 * Creates a new Int8TypedArray with the specified length,
 *  sets the value at the given position, and returns it.
 *
 * @param {number} length - The length of the Int8TypedArray to create.
 * @param {number} position - The position at which to set the value.
 * @param {number} value - The value to set at the specified position.
 * @returns {DataView} - The created Int8TypedArray with the value set at the specified position.
 * @throws {Error} - If the position is outside the range of the Int8TypedArray.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
