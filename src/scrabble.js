class Scrabble {
  // input = {
  //   word: "street",
  //   letterMultipliers: [1, 3, 2, 3, 1, 2],
  //   wordMultiplier: 2,
  // };
  constructor(input) {
    this.input = input;
    this.lettersToPoints = {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      D: 2,
      G: 2,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5,
      J: 8,
      X: 8,
      Q: 10,
      Z: 10,
    };
  }

  isValid() {
    // checks for numbers, null, undefined
    return typeof this.input === "string";
  }

  getPoints(char) {
    // search for the letter from the map lettersToPoints and returns the corresponding point, 0 if none
    return this.lettersToPoints[char.toUpperCase()] || 0;
  }

  score() {
    // Write your implementation here
    if (!this.isValid()) return 0;

    return this.input
      .split("")
      .reduce((prevVal, currVal) => prevVal + this.getPoints(currVal), 0);
  }
}

export default Scrabble;
