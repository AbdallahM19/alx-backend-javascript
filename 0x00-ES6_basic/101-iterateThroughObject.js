export default function iterateThroughObject(reportWithIterator) {
  let employeename = '';
  let index = 1;

  for (let employee of reportWithIterator) {
    if (employee) {
      employeename += `${employee}`;
      if (index < reportWithIterator.length) {
        employeename += ' | ';
      }
      index++;
    }
  }

  return employeename;
}
