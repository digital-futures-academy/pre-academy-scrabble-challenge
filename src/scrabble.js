class Scrabble {
  letter_values = {
    "AEIOULNRST": 1,
    "DG": 2,
    "BCMP": 3,
    "FHVWY": 4,
    "K": 5,
    "JX": 8,
    "QZ": 10
  };
  score_table = Object.entries(this.letter_values).reduce((lookup_table, [letters, score]) => {
    for (const letter of letters) { lookup_table[letter] = score } // used to be Array.from(letters).forEach(letter => lookup_table[letter] = score);
    return lookup_table;
  }, {});

  constructor(word) {
    this.isValidWord = true;
    if (typeof word != 'string') {
      this.isValidWord = false;
      //throw TypeError(`Can only compute scrabble score for a string: failed on ${word}`);
    } else if (word.match(/[^a-zA-Z]/) !== null) {
      this.isValidWord = false;
      //throw TypeError(`Only accepts words with letters a-z: failed on ${word}`);
    }
    this._word = this.isValidWord ? word.toUpperCase() : "";
  }

  score() {
    return Array.from(this._word, letter => this.score_table[letter]).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}

export default Scrabble;

/*
let scrabble1 = new Scrabble('');
console.log(scrabble1.score()); // => 0

let scrabble2 = new Scrabble(" \t\n");
console.log(scrabble2.score()); // => 0

let scrabble3 = new Scrabble(null);
console.log(scrabble3.score()); // => 0

let scrabble4 = new Scrabble('a');
console.log(scrabble4.score()); // => 1

let scrabble5 = new Scrabble('f');
console.log(scrabble5.score()); // => 4

let scrabble6 = new Scrabble('street');
console.log(scrabble6.score()); // => 6

let scrabble7 = new Scrabble('quirky');
console.log(scrabble7.score()); // => 22

let scrabble8 = new Scrabble('OXYPHENBUTAZONE');
console.log(scrabble8.score()); // => 41
*/