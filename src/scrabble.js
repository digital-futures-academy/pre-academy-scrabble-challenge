import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * constructor takes a word and an optional scoreModifier as an array
 * if a score modifier is not present it will pass an empty array
 * for letter modifier an array will need to be passed as ['l' (string), modifyer (int) , letter (string)]
 * for a word modifer and array will need to be passed as ['w' (string), modifyer (int)]
 */
class Scrabble {
  constructor(word, scoreModifyer = []) {
    this._word = word;
    this._scoreData = this.convertScoreDataToDataOBj();
    this._scoreModifyer = scoreModifyer;
  }

  /**
   * loadData() will read from wordScore.txt and convert it into an array
   * @returns an array where elements will have a string letter and score "A.1", "E,1" after reading from wordScore.txt
   */
  loadData() {
    const fileData = fs.readFileSync(path.join(__dirname, './wordScore.txt')).toString().split('\n');
    const returnArray = []
    fileData.forEach((item) => { item.length > 1 && (returnArray.push(item)); });
    return returnArray;
  }


  /**
   * convertScoreDataToDataOBj() will invoke loadData() and take the given array and convet into a data object.
   * @returns a data object that has been converted from an array
   */
  convertScoreDataToDataOBj() {
    const dataArray = this.loadData();
    const dataObject = {}
    dataArray.forEach((ele) => { dataObject[ele.split(',')[0]] = ele.split(',')[1] })
    return dataObject;
  }


  /**
   * takes a string parameter letter and validates the letter if it is an actual letter or whitespace/null
   * @param {string} letter
   * @returns an integer based on a given letter
   */
  validateEntry(letter) {
    if (letter.trim() === '' || letter === null) {
      return 0;
    } else {
      return parseInt(this._scoreData[letter.toUpperCase()]);
    }
  }

  /**
   *
   * @returns the total word score of a given word
   */
  calculateScore() {
    let total = 0;
    for (const letter in this._word) {
      total += this.validateEntry(this._word[letter]);
    }
    return total;
  }
  /**
   * checks to see if a score nees to be modified by wither a 2x/3x letter score or a 2x/3x word score
   * @param {int} score
   * @returns an int after determining if the score needs to be modified
   */
  modifyScore(score) {
    if (this._scoreModifyer[0] === 'l' && this._word.includes(this._scoreModifyer[2])) {
      return score += parseInt(this._scoreData[this._scoreModifyer[2].toUpperCase()]) * this._scoreModifyer[1] - 1;
    } else if (this._scoreModifyer[0] === 'w') {
      return score * this._scoreModifyer[1];
    }
  }

  /**
   * invokes convertScoreDataTODataOBj() and compares each letter of this._word and compares it to scoreData and
   * adds to the total for each element.
   * @returns total score as an Int
   */
  score() {
    // Write your implementation here
    if (this._scoreModifyer.length === 0) {
      return this.calculateScore();
    } else {
      return this.modifyScore(this.calculateScore());
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
