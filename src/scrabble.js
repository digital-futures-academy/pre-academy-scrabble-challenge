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

  score(bonus_letter_index_multipliers = {}, total_word_score_multiplier = 1) {
    return total_word_score_multiplier * Array.from(this._word, (letter, letter_index) => this.score_table[letter] * (bonus_letter_index_multipliers[letter_index] || 1)).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}

export default Scrabble;

let scrabble;

scrabble = new Scrabble('');
console.log(scrabble.score()); // => 0

scrabble = new Scrabble(" \t\n");
console.log(scrabble.score()); // => 0

scrabble = new Scrabble(null);
console.log(scrabble.score()); // => 0

scrabble = new Scrabble('a');
console.log(scrabble.score()); // => 1

scrabble = new Scrabble('f');
console.log(scrabble.score()); // => 4

scrabble = new Scrabble('street');
console.log(scrabble.score()); // => 6

scrabble = new Scrabble('quirky');
console.log(scrabble.score()); // => 22

scrabble = new Scrabble('OXYPHENBUTAZONE');
console.log(scrabble.score()); // => 41

scrabble = new Scrabble('Queens');
console.log(scrabble.score()); // 15
console.log(scrabble.score({}, 2)); // double word -> 30
console.log(scrabble.score({ 0: 2 })); // double letter on first letter -> 25
console.log(scrabble.score({ 0: 2, 4: 3 }, 2)); // double letter on first letter, triple on fifth letter, double word -> 54