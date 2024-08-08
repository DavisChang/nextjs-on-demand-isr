/**
 * TS Generics example
 */

// extends generics
export function getIndexOfArrayItem<T extends string | number>(
  array: T[],
  arrayItem: T
) {
  return array.findIndex((item) => item === arrayItem);
}

export function createArrayPair<T, K>(input1: T, input2: K): [T, K] {
  return [input1, input2];
}

const test = () => {
  const arr = [55, 99, 77];
  getIndexOfArrayItem(arr, 77);

  createArrayPair("hello", 10);
};
