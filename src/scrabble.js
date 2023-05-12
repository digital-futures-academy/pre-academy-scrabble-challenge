class Scrabble {
  letter_values = {
    "AEIOULNRST": 1,
    "DG": 2,
    "BCMP": 3,
    "FHVWY": 4,
    "K": 5,
    "JX": 8,
    "QZ": 10,
    " ": 0 // can be used for blank letters
  }
  score_table = Object.entries(this.letter_values).reduce((lookup_table, [letters, score]) => {
    for (const letter of letters) { lookup_table[letter] = score } // used to be Array.from(letters).forEach(letter => lookup_table[letter] = score);
    return lookup_table;
  }, {});

  constructor(word) {
    this.isValidWord = true;
    if (typeof word != 'string') {
      this.isValidWord = false;
      //throw TypeError(`Can only compute scrabble score for a string: failed on ${word}`);
    } else if (word.match(/[^a-zA-Z ]/) !== null) { // changed to include spaces for blank letters
      this.isValidWord = false;
      //throw TypeError(`Only accepts words with letters a-z: failed on ${word}`);
    }
    this._word = this.isValidWord ? word.toUpperCase() : "";
  }

  score(bonus_letter_index_multipliers = {}, total_word_score_multiplier = 1) {
    return total_word_score_multiplier * Array.from(this._word,
      (letter, letter_index) =>
        this.score_table[letter] * this.get_letter_index_multiplier(letter_index, bonus_letter_index_multipliers))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  get_letter_index_multiplier(letter_index, bonus_letter_index_mulitpliers = {}) {
    let possible_letter_multiplier = bonus_letter_index_mulitpliers[letter_index];
    return possible_letter_multiplier === undefined ? 1 : possible_letter_multiplier;
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
console.log(scrabble.score({ 0: 0, 1: 0 }, 3)); // two blanks (not sure this is possible in scrabble but is fine for testing) and a triple word -> 12

scrabble = new Scrabble('Ze ot'); // Zelot with a blank for the 'l'
console.log(scrabble.score());; // 13 (not 14)
console.log(scrabble.score({ 2: 0 })); // no effect, redundent, 13
console.log(scrabble.score({ 2: 3 })); // no effect as triple letter on a blank is still zero, 13