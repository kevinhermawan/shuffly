# Shuffly

![Minified size](https://img.shields.io/bundlephobia/min/shuffly) ![Test coverage](https://img.shields.io/codecov/c/github/kevinhermawan/shuffly) ![Monthly download](https://img.shields.io/npm/dm/shuffly)

Shuffly is a JavaScript utility that provides various functions for shuffling arrays. It includes both the [Fisher-Yates](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) and [Sattolo](https://rosettacode.org/wiki/Sattolo_cycle) algorithms for generating unique permutations and for repeated permutations respectively.

## Features

- Supports Fisher-Yates & Sattolo algorithms
- Supports Deno via NPM
- Zero dependencies

## Installation

To install `shuffly`, run the following command:

**NPM**

```
npm install shuffly
```

**Yarn**

```
yarn add shuffly
```

**pnpm**

```
pnpm add shuffly
```

## Usage

### shuffle

```ts
import { shuffle } from "shuffly";
// import { shuffle } from "npm:shuffly"; // (for Deno)

const array = [1, 2, 3, 4, 5];
const shuffledArray = shuffle(array);

console.log(shuffledArray); // [1, 3, 5, 2, 4] (shuffled)
```

The `shuffle` function is an implementation of the Fisher-Yates shuffle algorithm, which is a widely used algorithm for shuffling elements in an array randomly. The Fisher-Yates shuffle algorithm works by iterating through the array starting from the last element and swapping each element with a randomly chosen element from the remaining unshuffled portion of the array.

**Syntax**

```ts
shuffle<T>(array: T[]): T[]
```

**Time complexity**

> O(n), where n is the length of the array.

### shuffleUnique

```ts
import { shuffleUnique } from "shuffly";
// import { shuffleUnique } from "npm:shuffly"; // (for Deno)

const array = [1, 2, 3, 4, 5];
const shuffledArray = shuffleUnique(array);

console.log(shuffledArray); // [2, 4, 1, 5, 3] (shuffled)
```

The `shuffleUnique` function is an implementation of the Sattolo algorithm, which is a variant of the Fisher-Yates shuffle algorithm that guarantees that no repeated permutations are generated when shuffling an array. This means that after the shuffling is done, the elements in the array will be in a random order, but that order will be unique and different from all other possible orders of the same elements.

**Syntax**

```ts
shuffleUnique<T>(array: T[]): T[]
```

**Time complexity**

> O(n), where n is the length of the array.

## License

[MIT License](/LICENSE)
