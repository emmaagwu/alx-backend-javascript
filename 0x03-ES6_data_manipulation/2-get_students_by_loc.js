/**
 * Filters an array of students based on their location.
 * @param {Array} students - The array of student objects.
 * @param {string} city - The city to filter by.
 * @returns {Array} - The filtered array of students.
 */
export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
