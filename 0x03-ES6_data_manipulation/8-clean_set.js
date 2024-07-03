export default function cleanSet(set, startString) {
  if (!set || !startString || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const result = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valString = value.substring(startString.length);

      if (valString && valString !== value) {
        result.push(valString);
      }
    }
  }

  return result.join('-');
}
