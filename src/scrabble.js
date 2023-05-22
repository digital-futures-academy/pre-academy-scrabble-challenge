import {scoringPoints} from "./scoringPoints.js"
class Scrabble {
  constructor(word) {
    const regex = /[0-9$/\\&+,:;=?@#|'<>.^*()%!-]/;
    if (regex.test(word)){
      throw new Error ('Words can only contain letters.');
    } else { 
       this.word = word;
    }
  }

  score() {
    if (this.isEmptyWord() || this.isNull() || this.isWhiteSpace()) return 0;
    return this.#calculateScore();
  }

  #calculateScore() {
    const score = this.#wordLetters().reduce((acc, letter) => 
      letter in scoringPoints ? acc += parseInt(scoringPoints[letter]) : acc, 
      0
    );
    return score;
  }

  #wordLetters() {
    let letters = this.word.split("").map((letter) => letter.toLowerCase());
    return letters;
  }

  isEmptyWord = () => (this.word === "" ? true : false);

  isNull = () => (this.word === null ? true : false);

  isWhiteSpace = () => (" \t\n\r\v".indexOf(this.word) > -1 ? true : false);
}
export default Scrabble;