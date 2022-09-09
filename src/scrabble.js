class Scrabble {
  constructor(word) {
    // Check if the word is null or just whitespace
    if (word == null || word.trim().length === 0) {
      this.word = '';
    } else {
      /** Make the word completely uppercase so to match
       *  how the keys are letters in the pointsPerLetter object
       **/
      this.word = word.toUpperCase();
    }
  }
  // Class fields
  pointsTotal = 0; // Keep this initialised at 0 for if null/whitespace/empty are passed to constructor 
  pointsPerLetter = {
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
    Z: 10
  }
  // Class functions
  score() {
    /** Loop through each letter of the word, for each letter loop through each property of pointsPerLetter object
     * Retrieve the correct points per letter by accessing the value of the property
     * who's key matches the current letter being traversed through the word then add this value to the points total
     */
    for (let i = 0; i < this.word.length; i++) {
      for (const key in this.pointsPerLetter) {
        if (key === this.word[i]) {
          this.pointsTotal += this.pointsPerLetter[key];
        }
      }
    }
    return this.pointsTotal;
  }
}

export default Scrabble;
