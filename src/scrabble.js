import ScoreHandler from "./scoreHandler.js";
const sh = new ScoreHandler()

/**
 * constructor takes a word and an optional scoreModifier as an array
 * if a score modifier is not present it will pass an empty array
 * for letter modifier an array will need to be passed as ['l' (string), modifyer (int) , letter (string)]
 * for a word modifer and array will need to be passed as ['w' (string), modifyer (int)]
 */
class Scrabble {
  constructor(word, scoreModifyer = []) {
    this._word = word;
    this._scoreModifyer = scoreModifyer;
  }

  score() {
    // Write your implementation here
    if (this._scoreModifyer.length === 0) {
      return sh.calculateScore(this._word);
    } else {
      return sh.modifyScore(sh.calculateScore(this._word), this._scoreModifyer, this._word);
    }
  }
}

export default Scrabble;



// Test cases
// word passed through with no modifyer
// const testScrabble = new Scrabble('hello');

// word passed through with Letter modifyer
// const testScrabbleLetterModfied = new Scrabble('hello', ['l', 2, 'l']);

// word passed with Word modifyer
// const testScrabbleWordModified = new Scrabble('hello', ['w', 3]);


// console.log(testScrabble.score());
// console.log(testScrabbleLetterModfied.score());
// console.log(testScrabbleWordModified.score());
