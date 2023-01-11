function base<T>(array: T[], unique?: boolean): T[] {
  const newArray = array.slice();

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = unique
      ? Math.floor(Math.random() * i)
      : Math.floor(Math.random() * (i + 1));

    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

export function shuffle<T>(array: T[]): T[] {
  return base(array);
}

export function shuffleUnique<T>(array: T[]): T[] {
  return base(array, true);
}
