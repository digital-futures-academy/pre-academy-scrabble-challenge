class Scrabble {

  constructor(word) {
    if (word === null) {
      this.word = "";
    } else {
      this.word = word.toUpperCase();
    }
  }

  score() {
    // Write your implementation here

    //set pointValue

    let pointValue = {
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
      Y: 5,
      Z: 10,
    };

    //initial score

    let result = 0

    for (let i = 0; i <= this.word.length; i++) {

      const newarray = this.word.slice(i);
      result += pointValue[this.word[i].toUpperCase()] || 0;
    }
    return result;





  }
}

export default Scrabble;