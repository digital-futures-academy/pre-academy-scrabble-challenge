
import Dataloader from "./dataloader.js";
const dl = new Dataloader();

/**
 * Responsible for handling the score caluculation with and without score modifyers
 */
class ScoreHandler {
  constructor() {
    this._scoreData = dl.convertScoreDataToDataOBj();
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
      return this._scoreData[letter.toUpperCase()];
    }
  }

  /**
   *
   * @returns the total word score of a given word
   */
  calculateScore(word) {
    let total = 0;
    for (const letterIndex in word) {
      total += this.validateEntry(word[letterIndex]);
    }
    return total;
  }

  /**
   * checks to see if a score nees to be modified by wither a 2x/3x letter score or a 2x/3x word score
   * @param {int} score
   * @returns an int after determining if the score needs to be modified
   */
  modifyScore(score, scoreModifyer, word) {
    if (scoreModifyer[0] === 'l' && word.includes(scoreModifyer[2])) {
      return score += this._scoreData[scoreModifyer[2].toUpperCase()] * scoreModifyer[1] - 1;
    } else if (scoreModifyer[0] === 'w') {
      return score * scoreModifyer[1];
    }
  }
}

export default ScoreHandler;
