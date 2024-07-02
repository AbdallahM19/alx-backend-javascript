export default function getStudentsByLocation(students, local) {
  return students.filter((student) => student.location === local);
}
