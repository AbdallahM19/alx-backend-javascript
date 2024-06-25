export default function createIteratorObject(report) {
  const newarray = [];
  for (const i of Object.values(report.allEmployees)) {
    newarray.push(...i);
  }
  return newarray;
}
