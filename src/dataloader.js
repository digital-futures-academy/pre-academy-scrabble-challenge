import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Responsible for handeling
 */
class Dataloader {
  /**
   * loadData() will read from wordScore.txt and convert it into an array
   * @returns an array where elements will have a letter and score A:1, E:1 after reading from wordScore.txt
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
    dataArray.forEach((ele) => { dataObject[ele.split(',')[0]] = parseInt(ele.split(',')[1]) })
    return dataObject;
  }
}

export default Dataloader;
