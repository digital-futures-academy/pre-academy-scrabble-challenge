// import { scrabbleGrid } from "./scrabbleGrid";
import {scoringPoints} from "./scoringPoints.js"
class Scrabble {
  constructor(word) {
    this.word = word;
  }

  score() {
    if (this.isEmptyWord() || this.isNull() || this.isWhiteSpace()) return 0;
    return this.#calculateScore();
  }

  #calculateScore() {
    let score = 0;
    this.#wordLetters().forEach((letter) => {
      letter in scoringPoints ? score += parseInt(scoringPoints[letter]) : score 
    });
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

const scrabble = new Scrabble(null);
console.log(scrabble.score())
