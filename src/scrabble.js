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
    const fileData = fs.readFileSync(path.join(__dirname, './wordScore.txt'));
    const stringData = fileData.toString();
    return stringData;
  }
  score() {
    // Write your implementation here
  }
}

export default Scrabble;

// const testScrabble = new Scrabble('hello');

// console.log(testScrabble.loadData());
