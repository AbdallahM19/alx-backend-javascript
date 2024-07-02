export default function hasValuesFromArray(listElement, array) {
  return array.every((i) => listElement.has(i));
}
