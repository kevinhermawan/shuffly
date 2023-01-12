export function shuffleUnique<T>(array: T[]): T[] {
  const newArray = array.slice();

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);

    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}
