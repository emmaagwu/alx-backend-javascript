export default function appendToEachArrayValue(array, appendString) {
  const wordsArray = [];

  for (const word of array) {
    wordsArray.push(`${appendString}${word}`);
  }

  return wordsArray;
}
