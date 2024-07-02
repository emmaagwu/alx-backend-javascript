export default function getStudentIdsSum(student) {
  if (!Array.isArray(student)) {
    return 0;
  }
  return student.reduce((sum, student) => sum + student.id, 0);
}
