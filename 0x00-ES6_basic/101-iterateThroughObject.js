export default function iterateThroughObject(reportWithIterator) {
  let employeename = [];

  for (const employee of reportWithIterator) {
    employeename.push(employee);
  }

  return employeename.join(' | ');
}
