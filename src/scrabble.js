class Scrabble {
  constructor(input) {
    // sets the property of the Scrabble class to the input parameter
    this.input = input;
  }

  score() {
    // creates an object with letters of the alphabet attributes assigned a score
    const scoreMap = {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      R: 1,
      T: 1,
      L: 1,
      S: 1,
      N: 1,
      D: 2,
      D: 2,
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

    let result = 0;

    // if the input has no value then return a 0 point value
    if (this.input === null) {
      return (result = 0);
    } else {
      // converts input to uppercase and separates the input letters
      let splitInput = this.input.toUpperCase().split("");

      for (let i = 0; i < splitInput.length; i++) {

        /* checks if each letter in the word matches the parameter and adds the assigned value from ScoreMap object */
        if (splitInput[i].match(/[A-Z]/i)) {
          result += scoreMap[splitInput[i]];
        } else result = 0;
      }
    }

    return result;
  }
}
export default Scrabble;