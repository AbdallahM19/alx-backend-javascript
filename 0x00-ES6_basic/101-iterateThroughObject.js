export default function iterateThroughObject(reportWithIterator) {
  let employeename = '';
  let index = 1;

  for (const employee of reportWithIterator) {
    if (employee) {
      employeename += `${employee}`;
      if (index < reportWithIterator.length) {
        employeename += ' | ';
      }
      index += 1;
    }
  }

  return employeename;
}
