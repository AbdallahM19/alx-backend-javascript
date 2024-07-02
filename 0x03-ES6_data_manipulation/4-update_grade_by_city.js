export default function updateStudentGradeByCity(studentsList, local, listGrade) {
  return studentsList
    .filter(std => std.location === local)
    .map(std => {
      const grade = listGrade.find(gradeId => gradeId.studentId === std.id);
      return {
        ...std,
        grade: grade ? grade.grade : 'N/A',
      };
    });
}
