import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Scrabble {
  constructor(word) {
    this._word = word;
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
   * invokes convertScoreDataTODataOBj() and compares each letter of this._word and compares it to scoreData and
   * adds to the total for each element.
   * @returns total score as an Int
   */
  score() {
    // Write your implementation here
    let total = 0;
    const scoreData = this.convertScoreDataToDataOBj();
    for (const letter in this._word) {
      if (this._word[letter].trim() === '' || this._word[letter] === null) { return 0 };
      total += parseInt(scoreData[this._word[letter].toUpperCase()]);
    }
    return total;
  }
}

export default Scrabble;

const testScrabble = new Scrabble('hello');

console.log(testScrabble.score());
