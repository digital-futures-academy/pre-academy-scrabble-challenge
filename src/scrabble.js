class Scrabble {
  constructor(input) {
    this.input = this.convertInputToObj(this.isValid(input) ? input : "");
    this.lettersToPoints = {
      A: 1,
      B: 3,
      C: 3,
      D: 2,
      E: 1,
      F: 4,
      G: 2,
      H: 4,
      I: 1,
      J: 8,
      K: 5,
      L: 1,
      M: 3,
      N: 1,
      O: 1,
      P: 3,
      Q: 10,
      R: 1,
      S: 1,
      T: 1,
      U: 1,
      V: 4,
      W: 4,
      X: 8,
      Y: 4,
      Z: 10,
    };
  }

  convertInputToObj(input) {
    if (typeof input === "object") {
      return input;
    }

    return {
      word: input,
      letterMultipliers: Array(input.length).fill(1),
      wordMultiplier: 1,
    };
  }

  isValid(input) {
    // checks for numbers, null, undefined
    const isString = typeof input === "string";
    const isWordObject =
      typeof input?.word === "string" &&
      typeof input?.wordMultiplier === "number";

    return isString || isWordObject;
  }

  getPoints(char) {
    // search for the letter from the map lettersToPoints and returns the corresponding point, 0 if none
    return this.lettersToPoints[char.toUpperCase()] || 0;
  }

  score() {
    // Write your implementation here
    let inputArr = this.input.word.split("");
    let totalPoints = 0;

    for (let i = 0; i < inputArr.length; i++) {
      totalPoints +=
        this.getPoints(inputArr[i]) * this.input.letterMultipliers[i];
    }

    return totalPoints * this.input.wordMultiplier;
  }
}

export default Scrabble;
