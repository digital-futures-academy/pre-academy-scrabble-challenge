import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Scrabble {
  constructor(word) {
    this._word = word;
  }

  loadData() {
    const fileData = fs.readFileSync(path.join(__dirname, './wordScore.txt')).toString().split('\n');
    const returnArray = []
    fileData.forEach((item) => { item.length > 1 && (returnArray.push(item)); });
    return returnArray;
  }

  convertScoreDataToDataOBj() {
    const dataArray = this.loadData();
    const dataObject = {}
    dataArray.forEach((ele) => { dataObject[ele.split(',')[0]] = ele.split(',')[1] })
    return dataObject;
  }
  score() {
    // Write your implementation here
  }
}

export default Scrabble;

const testScrabble = new Scrabble('hello');

console.log(testScrabble.convertScoreDataToDataOBj());
