/**
 * Calculates the sum of student IDs.
 * @param {Array} student - The array of student objects.
 * @returns {number} The sum of student IDs.
 */
export default function getStudentIdsSum(student) {
  return student.reduce((sum, student) => sum + student.id, 0);
}
