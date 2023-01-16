import { describe, expect, it } from "vitest";

import { shuffle, shuffleUnique } from "../src/index";

const array = [1, 2, 3, 4, 5];

describe("shuffly", () => {
  it("shuffle", () => {
    const shuffledArray = shuffle(array);

    expect(Array.isArray(shuffledArray)).toBe(true);
    expect(shuffledArray.length).toBe(array.length);
    expect(shuffledArray).not.toEqual(array);
  });

  it("shuffleUnique", () => {
    const shuffledArray = shuffleUnique(array);

    expect(Array.isArray(shuffledArray)).toBe(true);
    expect(shuffledArray.length).toBe(array.length);
    expect(shuffledArray).not.toEqual(array);
  });
});
