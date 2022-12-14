class Scrabble {
  constructor(word) {
    if (word === null) {
      this.word = "";
    } else {
      this.word = word.toUpperCase();
    }
  }

  score() {
    // declare the initial result
    let result = 0;
    //declare the dictionary (the array)
    let dictionary = {
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
    for (let i = 0; i <= this.word.length; i++) {
      //extract the element from array without modifying the original one
      const newArray = this.word.slice(i);
      result += dictionary[this.word[i].toUpperCase()] || 0;
    }
    return result;
  }
}

export default Scrabble;

let scrabble = new Scrabble("");
scrabble.score(); // => 0

let scrabble = new Scrabble(" \t\n");
scrabble.score(); // => 0

let scrabble = new Scrabble(null);
scrabble.score(); // => 0

let scrabble = new Scrabble("a");
scrabble.score(); // => 1

let scrabble = new Scrabble("f");
scrabble.score(); // => 4

let scrabble = new Scrabble("street");
scrabble.score(); // => 6

let scrabble = new Scrabble("quirky");
scrabble.score(); // => 22

let scrabble = new Scrabble("OXYPHENBUTAZONE");
scrabble.score(); // => 41
