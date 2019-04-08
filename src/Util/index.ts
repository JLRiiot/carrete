const addItemToArray = <T>(item: T, original: T[]): T[] => {
  let newArray = original.slice();
  newArray.splice(newArray.length - 1, 0, item);
  return newArray;
};

const removeItemFromArray = <T>(
  item: T,
  originalArray: T[],
  matchFunction: (value: T, index?: number, array?: T[]) => boolean
): T[] => {
  return originalArray.filter(matchFunction);
};

export { addItemToArray, removeItemFromArray };
