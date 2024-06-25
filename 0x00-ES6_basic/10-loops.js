export default function appendToEachArrayValue(array, appendString) {
  const newarray = [];
  for (const val of array) {
    newarray.push(appendString + val);
  }

  return newarray;
}
