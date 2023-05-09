class Scrabble {

  _letterData = { 1: "AEIOULNRST", 2: "DG", 3: "BCMP", 4: "FHVWY", 5: "K", 8: "JX", 10: "QZ" }
  _score = 0;
  _words = '';


  constructor(words) {

    if (words) {
      this._words = words.toUpperCase();
    }
  }

  score() {
    for (let letter of this._words) {
      this._checkLetterPoint(letter)
    }
    return this._score;

  }

  _checkLetterPoint(letter) {
    for (let value in this._letterData) {
      if (this._letterData[value].includes(letter)) {
        this._score = this._score + parseInt(value);
      }
    }
  }

}


export default Scrabble;
