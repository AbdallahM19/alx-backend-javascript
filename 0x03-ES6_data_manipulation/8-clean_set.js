export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    throw new Error('StartString must be a string');
  }

  if (startString === '') {
    return '';
  }

  const result = [];

  for (const value of set) {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join('-');
}
