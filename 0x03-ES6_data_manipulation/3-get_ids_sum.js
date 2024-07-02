export default function getStudentIdsSum(students) {
  return students.reduce((accum, currentVal) => accum + currentVal.id ,0);
}
